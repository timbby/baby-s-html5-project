/**
 * Created by yoyo on 2017-04-19.
 */


function id(idName) {
  return document.getElementById(idName);
}

/**
 * 用于获取标签内部的纯文本内容
 * @param tag 要进行内容获取的标签
 * @returns {string} 返回值为获取到的文本内容，字符串类型
 */
function getText(tag) {
  //如果浏览器不认识这个属性，那么值为undefined
  if (tag.innerText !== undefined) {
    //说明支持
    return tag.innerText;
  } else {
    //不支持innerText，使用textContent
    return tag.textContent;
  }
}

/**
 *
 * @param tag
 * @param text
 */
function setText(tag, text) {
  if (tag.innerText !== undefined) {
    tag.innerText = text;
  } else {
    tag.textContent = text;
  }
}

/**
 * 可以获取指定标签任意样式的值
 * @param tag 要进行样式获取的标签
 * @param attr 要获取的样式名 - 字符串类型
 * @returns {*} 返回值为获取到的样式值 - 字符串类型，带单位
 */
function getStyle(tag, attr) {
  if (tag.currentStyle) {
    return tag.currentStyle[attr];
  } else {
    return getComputedStyle(tag, null)[attr];
  }
}