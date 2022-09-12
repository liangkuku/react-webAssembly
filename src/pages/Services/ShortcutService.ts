import { Subject } from "rxjs";

class ShortcutService {
  search$: Subject<boolean> = new Subject<boolean>();

  arrowUp$: Subject<boolean> = new Subject<boolean>();
  arrowDown$: Subject<boolean> = new Subject<boolean>();

  onGlobalKeydown(e: KeyboardEvent) {
    const { ctrlKey, key, metaKey } = e
    if (ctrlKey || metaKey) {
      if (key === 'f') {
        this.handleSearch(e)
      }
    }

    if (key === 'ArrowUp') {
      this.handleArrowUp(e)
    } else if (key === 'ArrowDown') {
      this.handleArrowDown(e)
    }
  }

  private handleSearch(e: KeyboardEvent) {
    e.preventDefault();
    this.search$.next(true)
  }

  private handleArrowUp(e: KeyboardEvent) {
    e.preventDefault();
    this.arrowUp$.next(true)
  }

  private handleArrowDown(e: KeyboardEvent) {
    e.preventDefault();
    this.arrowDown$.next(true)
  }
}

export default new ShortcutService();