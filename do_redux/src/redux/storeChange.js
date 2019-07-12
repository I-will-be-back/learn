// 管理状态, 修改
// 状态的修改是可预期的
export const storeChange = (store, action) => {
  switch (action.type) {
    case 'HEAD_COLOR':
      return {
        ...store,
        head: {
          ...store.head,
          color: action.color,
        },
      }
    case 'BODY_TEXT':
      return {
        ...store,
        body: {
          ...store.body,
          text: action.text,
        },
      }
    default:
      return { ...store };
  }
}