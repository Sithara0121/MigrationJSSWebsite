import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type FooterProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Footer = (props: FooterProps): JSX.Element => (
  <div>
    <p>Footer Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<FooterProps>(Footer);
