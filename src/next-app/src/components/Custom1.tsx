import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type Custom1 = {
  fields: {
    Header: Field<string>;
    Description: Field<string>;
  };
};

const Custom1 = (props: Custom1): JSX.Element => (
  <div>
    <Text tag="h2" className="contentTitle" field={props.fields.Header} />
    <RichText className="contentDescription" field={props.fields.Description} />
  </div>
);

export default Custom1;
