## ##Vue3 todolist

使用了
vue3 composition API
包含 \<script setup\> 下的變數宣告 function 使用

setup()中
reactive() ,資料 CRUD
computed() getter,setter 設定
props 父傳子聲明
function 使用
v-if,v-else,v-for 的使用
data 動態綁定
click 事件綁定

---

bootstrap5 樣式

---

同時做了一些效能測試在 App 組件,測試在 map 兩萬筆資料下下,deleteTodo(刪除選取的資料)所需要的秒數,結果可能沒什麼意義,不過在同樣條件下,不同主機目前 3700x+32gb ddr4 速度低於 i7-1260p +16gb.

vite 在我切換 deleteTodo 時,有時候會整個卡住,F5 hard refresh 是無法重啟頁面必須直接再開一個新的 TAB
