export default (a:any) :boolean => {
  return (!!a) && (a.constructor === Array);
};