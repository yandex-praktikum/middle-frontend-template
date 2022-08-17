import fullscreenBg from '../assets/img/fullscreen_bg.jpeg';

type ExitFullscreen = typeof document.exitFullscreen;
type RequestFullscreen = typeof document.documentElement.requestFullscreen;

declare global {
  interface Document {
    webkitExitFullscreen: ExitFullscreen;
    mozCancelFullScreen: ExitFullscreen;
    msExitFullscreen: ExitFullscreen;
    mozFullScreenElement: boolean;
    webkitFullscreenElement: boolean;
    msFullscreenElement: boolean;
  }

  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen;
    mozRequestFullScreen: RequestFullscreen;
    msRequestFullscreen: RequestFullscreen;
  }
}

export function toggleFullscreen(elem?: any) {
  elem = elem || document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(elem.ALLOW_KEYBOARD_INPUT);
    }
    document.body.style.backgroundColor = 'transparent';
    elem.style.backgroundImage = `url(${fullscreenBg})`
    elem.style.backgroundRepeat = 'no-repeat';
    elem.style.backgroundSize = 'cover';
    elem.style.height = '100vh';
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    document.body.style.backgroundColor = 'initial';
    elem.style.background = '#818CF8';
  }
}
