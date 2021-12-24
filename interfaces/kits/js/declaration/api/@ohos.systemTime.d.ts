/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AsyncCallback, ErrorCallback } from './basic';

/**
 * System time and timezone.
 *
 * @since 6
 */
declare namespace systemTime {
    /**
     * Sets the system time.
     * @permission ohos.permission.SET_TIME
     * @since 6
     */
    function setTime(time : number, callback : AsyncCallback<void>) : void;
    function setTime(time : number) : Promise<void>;
    /**
     * Obtains the number of milliseconds that have elapsed since the Unix epoch.
     * @since 8
     */
    function getCurrentTime(callback: AsyncCallback<number>): void;
    function getCurrentTime(): Promise<number>;

    /**
     * Obtains the number of nanoseconds that have elapsed since the Unix epoch.
     * @since 8
     */
    function getCurrentTimeNs(callback: AsyncCallback<number>): void;
    function getCurrentTimeNs(): Promise<number>;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, not including deep sleep time.
     * @since 8
     */
    function getRealActiveTime(callback: AsyncCallback<number>): void;
    function getRealActiveTime(): Promise<number>;

    /**
     * Obtains the number of nanoseconds elapsed since the system was booted, not including deep sleep time.
     * @since 8
     */
    function getRealActiveTimeNs(callback: AsyncCallback<number>): void;
    function getRealActiveTimeNs(): Promise<number>;

    /**
     * Obtains the number of milliseconds elapsed since the system was booted, including deep sleep time.
     * @since 8
     */
    function getRealTime(callback: AsyncCallback<number>): void;
    function getRealTime(): Promise<number>;

    /**
     * Obtains the number of nanoseconds elapsed since the system was booted, including deep sleep time.
     * @since 8
     */
    function getRealTimeNs(callback: AsyncCallback<number>): void;
    function getRealTimeNs(): Promise<number>;

    /**
     * Sets the system time.
     * @permission ohos.permission.SET_TIME
     * @since 7
     */
    function setDate(date: Date, callback: AsyncCallback<void>): void;
    function setDate(date: Date): Promise<void>;

    /**
     * Obtains the system date.
     * @since 8
     */
    function getDate(callback: AsyncCallback<Date>): void;
    function getDate(): Promise<Date>;

    /**
     * Sets the system time zone.
     * @permission ohos.permission.SET_TIME_ZONE
     * @since 7
     */
    function setTimezone(timezone: string, callback: AsyncCallback<void>): void;
    function setTimezone(timezone: string): Promise<void>;

      /**
     * Obtains the system time zone.
     * @since 8
     */  
    function getTimezone(callback: AsyncCallback<string>): void;
    function getTimezone(): Promise<string>;
}

export default systemTime;
