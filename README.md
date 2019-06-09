# vue-sharp
### 254330
(tìm hiểu về v-if v-else, v-show, v-for, methods)
#### Phân biệt v-if v-show
- v-if: Check điều kiện rồi mới render ra html
- v-show: render ra hết, rồi check điều kiện để quyết định có display hay không
#### Compare methods với computed
- Về bản chất thì computed và methods khá giống nhau, chỉ khác một vài điểm sau:
  + Computed khi được gọi thì không được thêm ()
  + Computed chỉ có dữ liệu từ data của component
  + Computed được tính toán lại khi có biến trong Computed thây đổi, còn methods tính toán lại mỗi khi method được gọi
    -> Computed có performance tốt hơn
  + Computed được cached -> khi biến không thay đổi thì có thể gọi lại Computed đã được tính toán trước đó mà không phải tính lại
- Data(Object), Computed(property)-> giống như một property trong data, Methods(property)
- Computed chạy trước
