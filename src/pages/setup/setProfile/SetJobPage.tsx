import { useState } from 'react';
import { useNavigate } from 'react-router';
import SelectButton from '../../../components/common/button/SelectButton';
import MainButton from '../../../components/common/button/MainButton';

import { useAtom } from 'jotai';
import { userInfoAtom } from '../../../store/userInfoAtom';

import axios from 'axios';

function SetJobPage() {
    const [selected, setSelected] = useState<string>('');
    const navigate = useNavigate();
    const isNextDisabled = !selected;

    const [userInfo, setUserInfo] = useAtom(userInfoAtom);

    const handleSelect = (value: string) => {
        setSelected(value);
    };

    const handleSubmit = async () => {
        if (isNextDisabled) return;

        const updatedUserInfo = { ...userInfo, category: selected };

        setUserInfo(updatedUserInfo);
        debugger;

        try {
            const response = await axios.post(
                '/api/auth/signup/kakao',
                updatedUserInfo
            );

            console.log('서버 응답:', response.data);

            // 3. 성공 시 메인 페이지로 이동
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            navigate('/main', { replace: true });
        } catch (error) {
            console.error('API 호출 실패:', error);
            alert('서버 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className="flex min-h-screen flex-col justify-between py-14">
            <section className="mb-12 rounded-lg py-5">
                <h1 className="text-display text-secondary">
                    직업을 설정해 주세요.
                </h1>
                <p className="text-small text-text-min">
                    선택해주신 직업군에 맞는 루틴을 추천해드릴게요.
                </p>
                <div className="mt-12 flex flex-col gap-4">
                    <SelectButton
                        value="STUDENT"
                        option="학생"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                    <SelectButton
                        value="WORKER"
                        option="직장인"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                    <SelectButton
                        value="FREELANCER"
                        option="프리랜서"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                    <SelectButton
                        value="JOBSEEKER"
                        option="취업준비생"
                        selected={selected}
                        onSelect={handleSelect}
                    ></SelectButton>
                </div>
            </section>
            <section className="py-5">
                <MainButton
                    disabled={isNextDisabled}
                    onClick={() => {
                        if (!isNextDisabled) {
                            handleSubmit();
                        }
                    }}
                ></MainButton>
            </section>
        </div>
    );
}

export default SetJobPage;
