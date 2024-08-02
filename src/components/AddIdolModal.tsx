import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

const AddIdolModal = () => {
  const [idolInfo, setIdolInfo] = useState({
    group: '아이돌 그룹',
    name: '아이돌 이름',
    gender: 'boy',
    profilePicture: 'www.abcd.efgh',
    totalVotes: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setIdolInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    console.log('아이돌 정보:', idolInfo);
    const { error } = await supabase.from('IdolList').insert(idolInfo);
    if (error) {
      console.error('아이돌 추가 중 오류 발생:', error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[30px] items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-violet11 m-0 text-[17px] font-medium">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="group"
            >
              그룹
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="group"
              value={idolInfo.group}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="name"
            >
              아이돌 이름
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="name"
              value={idolInfo.name}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="gender"
            >
              성별
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="gender"
              value={idolInfo.gender}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet11 w-[90px] text-right text-[15px]"
              htmlFor="profilePicture"
            >
              이미지
            </label>
            <input
              className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="profilePicture"
              value={idolInfo.profilePicture}
              onChange={handleChange}
            />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                className="bg-black text-violet11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                onClick={handleSubmit}
              >
                아이돌 추가
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default AddIdolModal;
