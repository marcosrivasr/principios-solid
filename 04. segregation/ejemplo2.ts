interface Callbacks {
  onSuccess: () => void;
  onError: () => void;
  onProgress: () => void;
  onAbort: () => void;
  onTimeout: () => void;
  onReady: () => void;
}
