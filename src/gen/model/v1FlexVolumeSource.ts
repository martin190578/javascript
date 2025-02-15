/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1LocalObjectReference } from './v1LocalObjectReference';

/**
* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
*/
export class V1FlexVolumeSource {
    /**
    * Driver is the name of the driver to use for this volume.
    */
    'driver': string;
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
    */
    'fsType'?: string;
    /**
    * Optional: Extra command options if any.
    */
    'options'?: { [key: string]: string; };
    /**
    * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef'?: V1LocalObjectReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string"
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1LocalObjectReference"
        }    ];

    static getAttributeTypeMap() {
        return V1FlexVolumeSource.attributeTypeMap;
    }
}

