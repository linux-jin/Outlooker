import './this.less';
import { Avatar as AntdAvatar } from 'antd';

let Avatar = function Avatar(props) {
  let colorLib = [
    '#E3008C',
    '#038387',
    '#D13438',
    '#004E8C',
    '#986F0B',
    '#750B1C',
    '#4F6BED',
    '#498205',
    '#00A2AE',
    '#fb8c00',
  ];
  let backgroundColor = '#f56a00';
  let children = '';
  let src = null;
  if (props.children) {
    children = props.children;
    if (typeof props.children === 'string') {
      backgroundColor =
        colorLib[
        String(
          props.children.substring(props.children.length - 1).charCodeAt(0),
        ) % 10
        ];
      let gaps = children.split(' ');
      if (gaps.length === 1) {
        children = children.substring(0, 1).toLocaleUpperCase();
      } else {
        let first = gaps[0].substring(0, 1).toLocaleUpperCase();
        let last = gaps[gaps.length - 1].substring(0, 1).toLocaleUpperCase();
        children = first + last;
      }
      // children = children.substring(0, 2).toLocaleUpperCase()
    }
  } else if (props.src) {
    src = props.src;
  }
  return (
    <>
      <AntdAvatar
        src={src}
        className={'outlooker-Avatar'}
        style={{ backgroundColor, verticalAlign: 'middle' }}
        size={props.size || 28}
      // size={40}
      >
        {children}
      </AntdAvatar>
    </>
  );
};
let AutoAvatar = function AutoAvatar(props) {
  let nextProps = {};
  let item = props.item;
  nextProps.children = item.dataSource;
  nextProps.size = props.size;
  return Avatar(nextProps, 'PrimaryButton');
};

export { Avatar, AutoAvatar };
