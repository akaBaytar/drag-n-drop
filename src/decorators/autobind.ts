// decorator for bind
export const bindDecorator = (
  _: any,
  __: string,
  desriptor: PropertyDescriptor
) => {
  const originalMethod = desriptor.value;
  const adjustDesriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFunc = originalMethod.bind(this);
      return boundFunc;
    },
  };
  return adjustDesriptor;
};
