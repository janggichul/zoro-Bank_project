import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// const { showAtom } = recoilPersist()

export const ShowState = atom({
  key: 'showState',
  default : false,
  // effects_UNSTABLE: [showAtom],
})

export const balanceCheckState = atom({
  key : 'balanceCheckState',
  default : false
})

export const TrasferState = atom({
  key : 'TrasferState',
  default : false
})
