import {create} from 'zustand'
import FallingImage from './FallingImage'

type State = {
    Presents: number,
    ClickerLevel: number,
    fallingImg: FallingImage[],
    ClickerCost: number,
    Username: string,
    Password: string,
    Id: number,
    loginPopupOpen: boolean,
    signUpPopupOpen: boolean,
};

type Actions = {
    setPresents: (Presents: number) => void;
    setClicker: (ClickerLevel: number) => void;
    setFallingImg: (image: FallingImage) => void;
    removeFallingImg: (id: number) => void;
    setClickerCost: (ClickerCost: number) => void;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    setId: (Id: number) => void;
    setLoginPopUpOpen: (loginPopupOpen: boolean) => void;
    setSignUpPopupOpen: (signUpPopupOpen: boolean) => void;
}

export const store : any = create<State & Actions>((set) => ({
    Presents: 0,
    ClickerLevel: 1,
    fallingImg: [],
    ClickerCost: 20,
    userCount: 0,
    users: [],
    Username: "",
    Password: "",
    Id: 0,
    loginPopupOpen: false,
    signUpPopupOpen: false,
    setPresents: (Presents: number) => set({Presents}),
    setClicker: (ClickerLevel: number) => set({ClickerLevel}),
    setFallingImg: (image) => set((state) => ({fallingImg: [...state.fallingImg, image] })),
    removeFallingImg: (id) => set((state) => ({fallingImg: state.fallingImg.filter((img) => img.id !== id)})),
    setClickerCost: (ClickerCost: number) => set({ClickerCost}),
    setUsername: (Username: string) => set({Username}),
    setPassword: (Password: string) => set({Password}),
    setId: (Id: number) => set({Id}),
    setLoginPopUpOpen: (loginPopupOpen: boolean) => set({loginPopupOpen}),
    setSignUpPopupOpen: (signUpPopupOpen: boolean) => set({signUpPopupOpen}),
}))