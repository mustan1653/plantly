import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
    hasFinishedOnboarding: boolean;
    toggleHadOnboarded: () => void
}

export const useUserStore = create(persist<UserStore>((set) => ({
    hasFinishedOnboarding: false,
    toggleHadOnboarded: () => {
        set((state) => {
            return {
                ...state,
                hasFinishedOnboarding: !state.hasFinishedOnboarding
            }
        })
    }

}),
    {
        name: "planty-user-store",
        storage: createJSONStorage(() => AsyncStorage)
    }
)

)