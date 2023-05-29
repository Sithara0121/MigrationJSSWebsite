import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Header = (props: HeaderProps): JSX.Element => (
  <div>
    <p>Header Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<HeaderProps>(Header);
