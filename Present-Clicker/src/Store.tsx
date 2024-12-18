import {create} from 'zustand'
import FallingImage from './FallingImage'

type State = {
    presents: number,
    clicker: number,
    fallingImg: FallingImage[],
    ppc: number,
    clickerCost: number,
};

type Actions = {
    setPresents: (presents: number) => void;
    setClicker: (clicker: number) => void;
    setFallingImg: (image: FallingImage) => void;
    removeFallingImg: (id: number) => void;
    setPpc: (ppc: number) => void;
    setClickerCost: (clickerCost: number) => void;
}

export const store : any = create<State & Actions>((set) => ({
    presents: 0,
    clicker: 1,
    fallingImg: [],
    ppc: 1,
    clickerCost: 20,
    userCount: 0,
    users: [],
    setPresents: (presents: number) => set({presents}),
    setClicker: (clicker: number) => set({clicker}),
    setFallingImg: (image) => set((state) => ({fallingImg: [...state.fallingImg, image] })),
    removeFallingImg: (id) => set((state) => ({fallingImg: state.fallingImg.filter((img) => img.id !== id)})),
    setPpc: (ppc: number) => set({ppc}),
    setClickerCost: (clickerCost: number) => set({clickerCost}),
}))