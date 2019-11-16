export interface onChangeParams {
  name: string;
  value: string;
}

export type onPressEnterEvent = (value: string) => void;
export type onChangeEvent = (params: onChangeParams) => void;

export interface InputProps {
  onPressEnter?: onPressEnterEvent;
  onChange?: onChangeEvent;
  name?: string;
  initialValue?: string;
  placeholder?: string;
}
