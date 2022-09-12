import { FC, PropsWithChildren, useState } from 'react'
import styles from './index.less'

type MaksProps = {
  visible: boolean,
  onClick: () => void;
}

export const Mask: FC<PropsWithChildren & MaksProps> = ({ children, visible, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ display: visible ? 'block' : 'none' }}
      className={`${styles.selectMask_box} ${visible ? styles.mask : ""} `} >
      {children}
    </div>
  )
}