import { ContentList } from "@/pages/BaseTypes"
import ShortcutService from "@/pages/Services/ShortcutService"
import { Tabs } from "antd"
import { FC, useEffect, useRef, useState } from "react"

const TabPane = Tabs.TabPane

type ContentProps = {
  list: ContentList[]
}

export const Content: FC<ContentProps> = ({
  list
}) => {
  const [key, setKey] = useState<string>(list[0].title)

  const keyRef = useRef(key)
  useEffect(() => {
    keyRef.current = key
  }, [key])

  useEffect(() => {
    console.log(key)
  }, [key])
  const next = () => {
    const index = list.findIndex(item => item.title === keyRef.current)
    const isLast = index === list.length - 1
    if (index !== -1 && !isLast) {

      setKey(list[index + 1].title)
    }
  }

  const prev = () => {
    const index = list.findIndex(item => item.title === keyRef.current)
    const isFirst = index === 0
    if (index !== -1 && !isFirst) {
      console.log(key, list[index - 1].title)
      setKey(list[index - 1].title)
    }
  }

  useEffect(() => {
    const arrowUp = ShortcutService.arrowUp$.subscribe(() => {
      prev()
    })

    const arrowDown = ShortcutService.arrowDown$.subscribe(() => {
      next()
    })

    return () => {
      arrowUp.unsubscribe();
      arrowDown.unsubscribe();
    }
  }, [])

  return (
    <Tabs
      tabPosition="left"
      activeKey={key}
      onChange={(activeKey) => {
        setKey(activeKey)
      }}
      items={list.map(item => {
        return {
          key: item.title,
          label: <div>
            {item.title}
          </div>,
          children: (
            <div className="contentBox">
              <i className="iconImage">&#xe9d6;</i>
              <h1>zzbd {item.title}</h1>
              <h4 style={{ wordBreak: 'break-all' }}>here is description dafdsjfa;sdjfjldsf oijdalfjsdkfljoasijdflkja;lskdjoasdmlkjd;lfjaldkj </h4>
            </div>
          )
        }
      })
      }
    />
  )
}
