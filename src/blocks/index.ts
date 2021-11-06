import {
  TextBlock,
  ImageLinkBlock,
  ButtonBlock,
  DividerBlock,
  HeaderBlock,
  ActionBlock,
  DescriptionBlock,
  SectionBlock,
  ContextBlock,
  LabelBlock,
  InputBlock,
  SelectBlock
} from './types';

export const textBlock = ({ text, inlines }: Exclude<TextBlock, 'type'>): TextBlock => {
  return {
    type: 'text',
    text,
    inlines
  };
};

export const imageLinkBlock = (url: string): ImageLinkBlock => {
  return {
    type: 'image_link',
    url
  };
};

export const buttonBlock = ({
  text,
  style,
  action_type,
  action_name,
  value
}: Exclude<ButtonBlock, 'type'>): ButtonBlock => {
  return {
    type: 'button',
    text,
    style,
    action_type,
    action_name,
    value
  };
};

export const dividerBlock = (): DividerBlock => {
  return {
    type: 'divider'
  };
};

export const headerBlock = ({ text, style }: Exclude<HeaderBlock, 'type'>): HeaderBlock => {
  return {
    type: 'header',
    text,
    style
  };
};

export const actionBlock = (elements: ButtonBlock[]): ActionBlock => {
  return {
    type: 'action',
    elements
  };
};

export const descriptionBlock = ({ term, content, accent }: Exclude<DescriptionBlock, 'type'>): DescriptionBlock => {
  return {
    type: 'description',
    accent,
    term,
    content
  };
};

export const sectionBlock = ({ content, accessory }: Exclude<SectionBlock, 'type'>): SectionBlock => {
  return {
    type: 'section',
    accessory,
    content
  };
};

export const contextBlock = ({ content, image }: Exclude<ContextBlock, 'type'>): ContextBlock => {
  return {
    type: 'context',
    content,
    image
  };
};

export const labelBlock = ({ text, markdown }: Exclude<LabelBlock, 'type'>): LabelBlock => {
  return {
    type: 'label',
    markdown,
    text
  };
};

export const inputBlock = ({ name, placeholder, required }: Exclude<InputBlock, 'type'>): InputBlock => {
  return {
    type: 'input',
    name,
    placeholder,
    required
  };
};

export const selectBlock = ({ name, options, placeholder, required }: Exclude<SelectBlock, 'type'>): SelectBlock => {
  return {
    type: 'select',
    name,
    options,
    placeholder,
    required
  };
};
