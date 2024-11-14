export function Logger(props) {
  const date = new Date();
  console.log(
    `Created at ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`
  );
  return <>{props.children}</>;
}
