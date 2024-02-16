interface ResponseCallbacks {
  onSuccess: () => void;
  onError: () => void;
}

interface ProgressCallbacks {
  onProgress: () => void;
  onAbort: () => void;
  onTimeout: () => void;
  onReady: () => void;
}

interface Callbacks extends ResponseCallbacks, ProgressCallbacks {}
