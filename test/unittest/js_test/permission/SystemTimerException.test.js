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

// @ts-nocheck
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'
import systemTimer from '@ohos.systemTimer'

describe('SystemTimerExceptionTest', function () {
    console.log('start################################start');

    /**
     * @tc.name: TestCreateTimerType001
     * @tc.desc: Test createTimer for promise when type is 16.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerType001', 0, async function (done) {
        console.log("testCreateTimerType001 start")
        let options = {
            type: 16,
            repeat: false
        }
        let timerId = await systemTimer.createTimer(options)
        console.info(`timerId ${timerId}`)
        expect(timerId !== 0).assertTrue();
        done();
        console.log('testCreateTimerType001 end');
    });

    /**
     * @tc.name: TestCreateTimerType002
     * @tc.desc: Test createTimer for promise when type is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerType002', 0, async function (done) {
        console.log("testCreateTimerType002 start")
        let options = {
            type: "type",
            repeat: false
        }
        try {
            systemTimer.createTimer(options).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerType002 end');
    });

    /**
     * @tc.name: TestCreateTimerRepeat003
     * @tc.desc: Test createTimer for promise when repeat is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerRepeat003', 0, async function (done) {
        console.log("testCreateTimerRepeat003 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: "true"
        }
        try {
            systemTimer.createTimer(options).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerRepeat003 end');
    });


    /**
     * @tc.name: TestCreateTimerWantAgent004
     * @tc.desc: Test createTimer for promise when wantAgent is number.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerWantAgent004', 0, async function (done) {
        console.log("testCreateTimerWantAgent004 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: false,
            wantAgent: 123,
        }
        try {
            systemTimer.createTimer(options).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerWantAgent004 end');
    });

    /**
     * @tc.name: TestCreateTimerCallback005
     * @tc.desc: Test createTimer for promise when callback is number.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerCallback005', 0, async function (done) {
        console.log("testCreateTimerCallback005 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: false,
            callback: 123,
        }
        try {
            systemTimer.createTimer(options).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerCallback005 end');
    });

    /**
     * @tc.name: TestCreateTimerNull006
     * @tc.desc: Test createTimer for promise when option is null.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerNull006', 0, async function (done) {
        console.log("testCreateTimerNull006 start")
        try {
            systemTimer.createTimer(null).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerNull006 end');
    });

    /**
     * @tc.name: TestCreateTimerRepeat007
     * @tc.desc: Test createTimer for promise when not repeat.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerRepeat007', 0, async function (done) {
        console.log("testCreateTimerRepeat007 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT
        }
        try {
            systemTimer.createTimer(options).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerRepeat007 end');
    });

    /**
     * @tc.name: TestCreateTimerInterval008
     * @tc.desc: Test createTimer for promise when interval is string .
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerInterval008', 0, async function (done) {
        console.log("testCreateTimerInterval008 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: false,
            interval: "1000"
        }
        try {
            systemTimer.createTimer(options).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerInterval008 end');
    });

    /**
     * @tc.name: TestCreateTimerType009
     * @tc.desc: Test createTimer for callback when type is 16.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerType009', 0, async function (done) {
        console.log("testCreateTimerType009 start")
        let options = {
            type: 16,
            repeat: false
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(false).assertTrue();
                }
                expect(true).assertTrue();
                done();
            })
        } catch (err) {
            expect(false).assertTrue();
            done();
        }
        console.log('testCreateTimerType009 end');
    });

    /**
     * @tc.name: TestCreateTimerType010
     * @tc.desc: Test createTimer for callback when type is string .
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerType010', 0, async function (done) {
        console.log("testCreateTimerType010 start")
        let options = {
            type: "type",
            repeat: false
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                } else {
                    expect(false).assertTrue();
                }
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerType010 end');
    });

    /**
     * @tc.name: TestCreateTimerRepeat011
     * @tc.desc: Test createTimer for callback when repeat is string .
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerRepeat011', 0, async function (done) {
        console.log("testCreateTimerRepeat011 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: "true"
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                } else {
                    expect(false).assertTrue();
                }
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerRepeat011 end');
    });

    /**
     * @tc.name: TestCreateTimerWantAgent012
     * @tc.desc: Test createTimer for callback when wantAgent is number.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerWantAgent012', 0, async function (done) {
        console.log("testCreateTimerWantAgent012 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: false,
            wantAgent: 123,
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                } else {
                    expect(false).assertTrue();
                }
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerWantAgent012 end');
    });

    /**
     * @tc.name: TestCreateTimerCallback013
     * @tc.desc: Test createTimer for callback when callback is number.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerCallback013', 0, async function (done) {
        console.log("testCreateTimerCallback013 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: false,
            callback: 123,
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                } else {
                    expect(false).assertTrue();
                }
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerCallback013 end');
    });

    /**
     * @tc.name: TestCreateTimerNull014
     * @tc.desc: Test createTimer for callback when option is null.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerNull014', 0, async function (done) {
        console.log("testCreateTimerNull014 start")
        try {
            systemTimer.createTimer(null, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                } else {
                    expect(false).assertTrue();
                }
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerNull014 end');
    });

    /**
     * @tc.name: TestCreateTimerRepeat015
     * @tc.desc: Test createTimer for callback when not repeat.
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerRepeat015', 0, async function (done) {
        console.log("testCreateTimerRepeat015 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                } else {
                    expect(false).assertTrue();
                }
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerRepeat015 end');
    });

    /**
     * @tc.name: TestCreateTimerInterval016
     * @tc.desc: Test createTimer for callback when interval is string .
     * @tc.type: Function
     * @tc.require:
     */
    it('testCreateTimerInterval016', 0, async function (done) {
        console.log("testCreateTimerInterval008 start")
        let options = {
            type: systemTimer.TIMER_TYPE_EXACT,
            repeat: false,
            interval: "1000"
        }
        try {
            systemTimer.createTimer(options, (err) => {
                if (err) {
                    expect(err.code).assertEqual(401);
                    done();
                } else {
                    expect(false).assertTrue();
                    done();
                }
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testCreateTimerInterval016 end');
    });

    /**
     * @tc.name: TestStartTimerLackParam001
     * @tc.desc: Test startTimer for callback when not triggerTime.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerLackParam001', 0, async function (done) {
        console.log("testStartTimerLackParam001 start")
        let options = {
            type: systemTimer.TIMER_TYPE_REALTIME,
            repeat: true,
            interval: 5001
        }
        try {
            let timerId = await systemTimer.createTimer(options);
            expect(Number.isInteger(timerId)).assertTrue();
            systemTimer.startTimer(timerId, function (err) {
                expect(false).assertTrue();
                done();
            });
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testStartTimerLackParam001 end');
    });

    /**
     * @tc.name: TestStartTimerLackParam002
     * @tc.desc: Test startTimer for promise when not triggerTime.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerLackParam002', 0, async function (done) {
        console.log("testStartTimerLackParam002 start")
        let options = {
            type: systemTimer.TIMER_TYPE_REALTIME,
            repeat: true,
            interval: 5001
        }
        try {
            let timerId = await systemTimer.createTimer(options);
            expect(Number.isInteger(timerId)).assertTrue();
            systemTimer.startTimer(timerId).then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testStartTimerLackParam002 end');
    });

    /**
     * @tc.name: TestStartTimerInvalidParam003
     * @tc.desc: Test startTimer for callback when timerId is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerInvalidParam003', 0, async function (done) {
        console.log("testStartTimerInvalidParam003 start")
        try {
            systemTimer.startTimer("timerId", function (err) {
                expect(false).assertTrue();
                done();
            });
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testStartTimerInvalidParam003 end');
    });

    /**
     * @tc.name: TestStartTimerInvalidParam004
     * @tc.desc: Test startTimer for promise when timerId is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerInvalidParam004', 0, async function (done) {
        console.log("testStartTimerInvalidParam004 start")
        try {
            systemTimer.startTimer("timerId").then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testStartTimerInvalidParam004 end');
    });

    /**
     * @tc.name: TestStartTimerInvalidValue005
     * @tc.desc: Test startTimer for callback when timerId is invalid.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerInvalidValue005', 0, async function (done) {
        console.log("testStartTimerInvalidValue005 start")
        let triggerTime = new Date().getTime();
        triggerTime += 3000;
        systemTimer.startTimer(123456, triggerTime, function (err) {
            if (err) {
                expect(true).assertTrue();
            } else {
                expect(false).assertTrue();
            }
            done();
        });
        console.log('testStartTimerInvalidValue005 end');
    });

    /**
     * @tc.name: TestStartTimerInvalidValue006
     * @tc.desc: Test startTimer for promise when timerId is invalid.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerInvalidValue006', 0, async function (done) {
        console.log("testStartTimerInvalidValue006 start")
        try {
            let triggerTime = new Date().getTime();
            triggerTime += 300
            systemTimer.startTimer(123456, triggerTime).then(() => {
                expect(false).assertTrue();
                done();
            }).catch((e) => {
                expect(true).assertTrue();
                done();
            })
        } catch (err) {
            expect(true).assertTrue();
            done()
        }
        console.log('testStartTimerInvalidValue006 end');
    });

    /**
     * @tc.name: TestStartTimerInvalidValue007
     * @tc.desc: Test startTimer for callback when triggerTime is -1.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStartTimerInvalidValue007', 0, async function (done) {
        console.log("testStartTimerInvalidValue007 start")
        let options = {
            type: systemTimer.TIMER_TYPE_REALTIME,
            repeat: false
        }
        let timerId = await systemTimer.createTimer(options);
        systemTimer.startTimer(timerId, -1, function (err) {
            if (err) {
                expect(false).assertTrue();
            }
            expect(true).assertTrue();
            systemTimer.destroyTimer(timerId);
            done();
        });
        console.log('testStartTimerInvalidValue007 end');
    });

    /**
     * @tc.name: TestStartTimerInvalidValue008
     * @tc.desc: Test startTimer for callback when triggerTime is -1.
     * @tc.type: Function
     * @tc.require:
     */
    it('SUB_time_systemTimer_startTimer_0008', 0, async function (done) {
        console.log("SUB_time_systemTimer_startTimer_0008 start")
        let options = {
            type: systemTimer.TIMER_TYPE_REALTIME,
            repeat: false
        }
        try {
            let timerId = await systemTimer.createTimer(options);
            systemTimer.startTimer(timerId, -1).then(() => {
                expect(true).assertTrue();
                done();
            }).catch((e) => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(false).assertTrue();
            done()
        }
        console.log('SUB_time_systemTimer_startTimer_0008 end');
    });

    /**
     * @tc.name: TestDestroyTimerInvalidParam001
     * @tc.desc: Test destroyTimer for callback when timerId is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testDestroyTimerInvalidParam001', 0, async function (done) {
        console.log("testDestroyTimerInvalidParam001 start");
        try {
            systemTimer.destroyTimer("timerID", function (e) {
                expect(false).assertTrue();
                done();
            });
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log('testDestroyTimerInvalidParam001 end');
    });

    /**
     * @tc.name: TestDestroyTimerInvalidParam002
     * @tc.desc: Test destroyTimer for promise when timerId is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testDestroyTimerInvalidParam002', 0, async function (done) {
        console.log("testDestroyTimerInvalidParam002 start");
        try {
            systemTimer.destroyTimer("timerID").then(() => {
                expect(false).assertTrue();
                done();
            })
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
        console.log("testDestroyTimerInvalidParam002 end");
    });

    /**
     * @tc.name: TestDestroyTimerInvalidValue003
     * @tc.desc: Test destroyTimer for callback when timerId is invalid.
     * @tc.type: Function
     * @tc.require:
     */
    it('testDestroyTimerInvalidValue003', 0, async function (done) {
        console.log("testDestroyTimerInvalidValue003 start");
        try {
            systemTimer.destroyTimer(123456, function (err) {
                if (err) {
                    expect(true).assertTrue();
                } else {
                    expect(false).assertTrue();
                }
                done();
            });
        } catch (err) {
            expect(true).assertTrue();
            done();
        }
        console.log('testDestroyTimerInvalidValue003 end');
    });

    /**
     * @tc.name: TestDestroyTimerInvalidValue004
     * @tc.desc: Test destroyTimer for promise when timerId is invalid.
     * @tc.type: Function
     * @tc.require:
     */
    it('testDestroyTimerInvalidValue004', 0, async function (done) {
        console.log("testDestroyTimerInvalidValue004 start");
        try {
            systemTimer.destroyTimer(123456).then(() => {
                expect(false).assertTrue();
                done();
            }).catch((e) => {
                expect(true).assertTrue();
                done();
            })
        } catch (err) {
            expect(true).assertTrue();
            done();
        }
        console.log("testDestroyTimerInvalidValue004 end");
    });

    /**
     * @tc.name: TestStopTimerInvalidParam001
     * @tc.desc: Test stopTimer for promise when timerId is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStopTimerInvalidParam001', 0, async function (done) {
        try {
            systemTimer.stopTimer("timerID").then(() => {
                expect(false).assertTrue();
                done();
            });
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
    });

    /**
     * @tc.name: TestStopTimerInvalidParam002
     * @tc.desc: Test stopTimer for callback when timerId is string.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStopTimerInvalidParam002', 0, async function (done) {
        try {
            systemTimer.stopTimer("timerID", function (err) {
                expect(false).assertTrue();
                done();
            });
        } catch (err) {
            expect(err.code).assertEqual(401);
            done();
        }
    });

    /**
     * @tc.name: TestStopTimerInvalidValue003
     * @tc.desc: Test stopTimer for callback when timerId is invalid.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStopTimerInvalidValue003', 0, async function (done) {
        try {
            systemTimer.stopTimer(123456, function (err) {
                if (err) {
                    expect(true).assertTrue();
                } else {
                    expect(false).assertTrue();
                }
                done();
            });
        } catch (err) {
            expect(true).assertTrue();
            done();
        }
    });

    /**
     * @tc.name: TestStopTimerInvalidValue004
     * @tc.desc: Test stopTimer for promise when timerId is invalid.
     * @tc.type: Function
     * @tc.require:
     */
    it('testStopTimerInvalidValue004', 0, async function (done) {
        try {
            systemTimer.stopTimer(123456).then(() => {
                expect(false).assertTrue();
                done();
            }).catch((err) => {
                expect(true).assertTrue();
                done();
            })
        } catch (err) {
            expect(true).assertTrue();
            done();
        }
    });
})