# 需求建議書：企業客戶管理與業務對接系統
## 一、專案概述
本系統旨在幫助企業高效管理客戶資訊、簡化業務流程，並提升業務團隊的協作效率。透過整合客戶資料、詢單管理、報價系統、訂單與生產追蹤，以及業務對接工具，打造一個完整的業務管理解決方案。
## 二、系統功能規劃
### 0. 儀表板
![messageImage_1741004050646](https://hackmd.io/_uploads/HyreJm7jke.jpg)

- **功能描述：**
  - 顯示目前訂單整體狀態及預覽。
  - 快速了解目前訂單的進度及重要提醒通知。
### 1. 客戶資料庫管理
![messageImage_1741004115708](https://hackmd.io/_uploads/SyqZJ7Qi1g.jpg)
- **功能描述：**
  - 記錄客戶基本資料（名稱、聯絡方式、公司資訊等）。
  - 透過標籤與分類功能，快速查找與篩選客戶。
- **使用者角色：**
  - 業務人員：管理客戶資訊，查看歷史對話紀錄。
  - 管理者：監控客戶互動，調整業務策略。
### 2. 客戶詢單管理
![messageImage_1741004122965](https://hackmd.io/_uploads/ByrHkXmiJx.jpg)
- **功能描述：**
  - 提供標準化詢單表單，包含產品類型、材料、MOQ 等選項。
  - 客戶可直接填寫詢單，業務人員亦可代填並標記客戶來源。
  - 詢單提交後，自動通知相關業務人員進行跟進。
### 3. 報價系統
![messageImage_1741004130764](https://hackmd.io/_uploads/BJH7k7Xskl.jpg)
- **功能描述：**
  - 根據客戶需求，自動選擇對應原料，計算成本與 MOQ。
  - 自動生成報價單，支援 Excel、PDF 匯出。
### 4. 訂單與生產追蹤
![messageImage_1741004140891](https://hackmd.io/_uploads/rkWv1m7sJx.jpg)
- **功能描述：**
  - 訂單狀態管理（訂單確認 → 生產 → 出貨）。
  - 訂單進度通知。
### 5. 業務對接工具整合
![messageImage_1741004149665](https://hackmd.io/_uploads/r1ldk7Xoye.jpg)
- **功能描述：**
  - 業務可直接從系統內發送郵件與報價，減少工具切換時間。
## 三、架構設計
### 1. 系統架構
- **前端 (Frontend)：** React / Vue.js / flutter
- **後端 (Backend)：** Node.js / Python
- **資料庫 (Database)：** PostgreSQL / MySQL
- **雲端部署 (Cloud Deployment)：** GCP
## 四、工作時程與預估費用
### 1. 工作時程
| 階段 | 任務內容 | 預計時間 |
|------|---------|---------|
| 需求分析 | 訪談、需求整理、功能確認 | 2 週 |
| 介面設計 | 視覺與 UX 設計、原型開發 | 3 週 |
| 系統架構 | 資料庫設計、後端 API 規劃 | 3 週 |
| 開發 | 前後端系統開發 | 8 週 |
| 測試與優化 | 功能測試、錯誤修正 | 3 週 |
| 部署與上線 | 伺服器設定、正式上線 | 2 週 |
### 2. 預估費用（未稅）
| 項目 | 費用 (NTD) |
|------|---------|
| 需求分析與需求確認 | 12,800 |
| 介面設計（UX/UI） | 198,750 |
| 後端開發（API、資料庫） | 312,450|
| 前端開發 | 247,900 |
| 測試與優化 | 102,680 |
| 部署與維運 | 97,320|
| **總計** | **971,900** |
### 3. 維護以及雲端伺服器開銷（未稅）
| 項目 | 費用 (NTD) |週期|
|------|---------|--|
| 雲端服務管銷 |2,000 |月|
| 系統運營費用 | 2,000 |月|
## 五、預期效益
- **提升業務效率**：自動化詢單、報價與訂單追蹤，減少人工處理時間。
- **強化客戶關係**：透過完整的客戶資訊與對話紀錄，提供更精準的服務。
- **減少溝通成本**：訂單進度客戶端查詢，降低來回確認的時間。
本系統將幫助企業提升業務管理效率，優化客戶體驗，實現數位化轉型。

## 六、本公司聯絡資訊
- 公司名稱：易飛特資訊技術整合有限公司
- 聯絡電話：0918-775-505
- 聯絡人：徐先生(Jack)
- 聯絡信箱：eft@hi-effect.com