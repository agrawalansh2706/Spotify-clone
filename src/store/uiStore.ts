import { create } from 'zustand';

interface UIState {
  isSocialSidebarOpen: boolean;
  toggleSocialSidebar: () => void;
  setSocialSidebar: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSocialSidebarOpen: true,
  toggleSocialSidebar: () => set((state) => ({ isSocialSidebarOpen: !state.isSocialSidebarOpen })),
  setSocialSidebar: (open) => set({ isSocialSidebarOpen: open }),
}));
