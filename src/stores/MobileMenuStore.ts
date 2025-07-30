import {create} from 'zustand'

interface MobileMenuStore {
  showMobileMenu: boolean;
  toggleMobileMenu: () => void;
}

const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  showMobileMenu: false,
  toggleMobileMenu: () => set((state) => ({showMobileMenu: !state.showMobileMenu})),
}));

export default useMobileMenuStore;