/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite/client" />

declare module 'virtual:pwa-register' {
    export interface RegisterSWOptions {
      immediate?: boolean
      onNeedRefresh?: () => void
      onOfflineReady?: () => void
      onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
      onRegisterError?: (error: any) => void
    }
  
    export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>
  }
  
  interface ImportMetaEnv {
    readonly PROD: boolean
    readonly DEV: boolean
    readonly SSR: boolean
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }