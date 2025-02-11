/* tslint:disable */
/* eslint-disable */
/**
 * VOICEVOX ENGINE
 * VOICEVOXの音声合成エンジンです。
 *
 * The version of the OpenAPI document: 0.14.0-preview.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Speaker,
    SpeakerFromJSON,
    SpeakerFromJSONTyped,
    SpeakerToJSON,
    SpeakerInfo,
    SpeakerInfoFromJSON,
    SpeakerInfoFromJSONTyped,
    SpeakerInfoToJSON,
} from './';

/**
 * ダウンロード可能な音声ライブラリの情報（最新情報をwebで取得することを考慮して、ローカルの情報はない）
 * @export
 * @interface DownloadableLibrary
 */
export interface DownloadableLibrary {
    /**
     * 
     * @type {string}
     * @memberof DownloadableLibrary
     */
    downloadUrl: string;
    /**
     * 
     * @type {number}
     * @memberof DownloadableLibrary
     */
    bytes: number;
    /**
     * 
     * @type {Speaker}
     * @memberof DownloadableLibrary
     */
    speaker: Speaker | null;
    /**
     * 
     * @type {SpeakerInfo}
     * @memberof DownloadableLibrary
     */
    speakerInfo: SpeakerInfo | null;
}

export function DownloadableLibraryFromJSON(json: any): DownloadableLibrary {
    return DownloadableLibraryFromJSONTyped(json, false);
}

export function DownloadableLibraryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DownloadableLibrary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'downloadUrl': json['download_url'],
        'bytes': json['bytes'],
        'speaker': SpeakerFromJSON(json['speaker']),
        'speakerInfo': SpeakerInfoFromJSON(json['speaker_info']),
    };
}

export function DownloadableLibraryToJSON(value?: DownloadableLibrary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'download_url': value.downloadUrl,
        'bytes': value.bytes,
        'speaker': SpeakerToJSON(value.speaker),
        'speaker_info': SpeakerInfoToJSON(value.speakerInfo),
    };
}

