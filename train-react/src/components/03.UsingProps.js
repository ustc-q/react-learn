/**
 * @since 2017-05-23 15:48:25
 * @author vivaxy
 */

import React from 'react';

export const avatarURL =
  'https://p0.meituan.net/shopdiy/ded03b86805c898c6a12e0ab620936ff1251.png';
// https://p1.meituan.net/shopdiy/7938fe679fc2411479ff765c29c8816d1453.png
// https://p1.meituan.net/shopdiy/c116e9fe46712c8fd3fa8e87a29d5c941485.png
// https://p0.meituan.net/shopdiy/fc85280a026bef617e4919fce808d4c61483.png
// https://p1.meituan.net/shopdiy/5b193d59ec9ddb13e13a694dd971a7f01314.png
// https://p0.meituan.net/shopdiy/bbe81c55285bd4cb1f2b6f816a4d869c1435.png
// https://p0.meituan.net/shopdiy/8065a561c13890fc446abfd5976ffb8a1291.png

// 属性基本用法
const element = <img alt="avatar" src={avatarURL} className={'avatar'} />;

// 属性中的字符串推荐通过双引号传递
// const element = <img src={avatarURL} className="avatar" />;

// 属性为 `true` 时推荐省略值
// const element = <button disabled={true}>提交</button>;
// const element = <button disabled>提交</button>;

export default element;
