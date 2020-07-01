import { inputConf, inputData } from "./Input";
import { radioConf } from "./Radio";
import { checkBoxConf } from "./CheckBox";
import { aswitch } from "./Switch"
import { selectConf } from "./Select"
import { dateConf } from "./Date"
import { uploadImg } from "./UploadImg"

const formList = {
  input: inputConf,
  radio: radioConf,
  checkBox: checkBoxConf,
  a: inputData,
  b: aswitch,
  c: selectConf,
  d: dateConf,
  e: uploadImg
};
export const formlist = function(){
  let list_arr = [];
  for (let i in formList) {
    list_arr.push( formList[i]);
}
  return list_arr
}
