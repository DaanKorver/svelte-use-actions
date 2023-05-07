import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export type IState = PermissionState | '';

interface IPushPermissionDescriptor extends PermissionDescriptor {
	name: 'push';
	userVisibleOnly?: boolean;
}

interface IMidiPermissionDescriptor extends Omit<PermissionDescriptor, 'name'> {
	name: 'midi';
	sysex?: boolean;
}

interface IDevicePermissionDescriptor extends Omit<PermissionDescriptor, 'name'> {
	name: 'camera' | 'microphone' | 'speaker';
	deviceId?: string;
}

export type IPermissionDescriptor =
	| PermissionDescriptor
	| IPushPermissionDescriptor
	| IMidiPermissionDescriptor
	| IDevicePermissionDescriptor;

export const usePermission = (permissionDesc: PermissionDescriptor) => {
	let permissionStatus: PermissionStatus | null = null;
	return readable('' as IState, (set) => {
		if (browser) {
			console.log(permissionDesc);

			navigator.permissions.query(permissionDesc).then((status) => {
				console.log(status);

				permissionStatus = status;
				set(permissionStatus.state);

				const callback = () => {
					set(permissionStatus?.state ?? '');
				};
				status.addEventListener('change', callback);
			});

			return () => {
				set('');
				permissionStatus = null;
			};
		}
	});
};
