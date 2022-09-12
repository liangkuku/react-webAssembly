import { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import yayJpg from '../assets/yay.jpg';
import { Search } from './Components/Search';
import Graphic from './Graphic';
import ShortcutService from './Services/ShortcutService';

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (container.current)
      Graphic.createCanvas(container.current)
  }, [])

  useEffect(() => {
    const keydownSub = fromEvent(document, 'keydown').subscribe((e) => {
      ShortcutService.onGlobalKeydown(e as KeyboardEvent)
    })

    return () => {
      keydownSub.unsubscribe();
    }
  }, [])

  return (
    <>
      <Search />
      <div style={{ height: '100%', width: '100%' }} className='ddd' ref={container}></div>
    </>
  );
}
