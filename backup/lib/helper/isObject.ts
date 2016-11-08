export default (o:any) :boolean => {
  return (!!o) && (o.constructor === Object);
};

