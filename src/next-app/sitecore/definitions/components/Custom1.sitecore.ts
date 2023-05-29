import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Styleguide-FieldUsage-Checkbox component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function StyleguideFieldUsageCheckbox(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Custom1',
    templateName: 'Custom1',
    icon: SitecoreIcon.CheckboxSelected,
    fields: [
      { name: 'Header', type: CommonFieldTypes.SingleLineText },
      { name: 'Description', type: CommonFieldTypes.MultiLineText },
    ],
    // inherit fields from another template (../templates/Styleguide-Explanatory-Component)
    // inheritance adds fields defined on the base template(s) implicitly to this component
    inherits: [
      
    ],
  });
}
