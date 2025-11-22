---
layout: landing
title: Test
permalink: /pricing2
show_in_nav: true
---
<!--StartFragment-->

<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <title>PCB Quality Assurance Form</title>

  <!-- 替换原有 style 标签为你的新 CSS -->

  <style>

  body {

      font-family: 'Open Sans', sans-serif;

      background-color: #F2F2F2;

      padding: 20px;

      color: #6B6B6B;

      font-size: 14px;

      line-height: 1.7;

  }

  /\* 表单整体间距优化 \*/

  .pcb-form {

    max-width: 900px;

    margin: 0 auto;

    background: #fff;

    padding: 32px 40px;

    border-radius: 14px;

    box-shadow: 0 2px 8px rgba(0,0,0,0.08);

  }

  .form_common {

    margin-bottom: 28px;

  }

  .form_common label {

    margin-bottom: 10px;

  }

  .option-group {

    gap: 14px;

    margin-bottom: 6px;

  }

  .option-group button {

    padding: 10px 18px;

    font-size: 15px;

  }

  .dimension-group {

    gap: 18px;

    margin-bottom: 6px;

  }

  input\[type="text"], input\[type="number"], select {

    width: 220px;

    padding: 8px 12px;

    font-size: 15px;

    margin-right: 8px;

  }



  /\* --------- 结果展示表格样式优化（仅下方部分为新样式） --------- \*/

\#pcbtablediv {

      margin: 32px auto;

      padding: 24px 18px;

      background-color: #fff;

      border: 2px solid #1abc9c;

      border-radius: 10px;

      overflow-x: auto;

      max-width: 1200px;

      box-shadow: 0 2px 8px rgba(26,188,156,0.1);

  }

  .pcbgrid {

      width: 100%;

      border-collapse: collapse;

  }

  .pcbgrid thead {

      background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%);

  }

  .pcbgrid th {

      padding: 14px 16px;

      text-align: left;

      font-weight: 700;

      border-bottom: 3px solid #16a085;

      font-size: 14px;

      color: #fff;

      letter-spacing: 0.5px;

  }

  .pcbgrid th a {

      color: #fff;

      text-decoration: none;

      cursor: pointer;

  }

  .pcbgrid tbody tr {

      border-bottom: 1px solid #E8E8E8;

      transition: background-color 0.2s;

  }

  .pcbgrid tbody tr:hover {

      background-color: #f0fdf9;

  }

  .pcbgrid td {

      padding: 16px;

      vertical-align: top;

      text-align: left;

  }

  .pcbFirstColumn {

      font-weight: 600;

      border-left: 3px solid #1abc9c;

  }

  .pcbFirstColumn a {

      color: #1abc9c;

      text-decoration: none;

      font-size: 15px;

      font-weight: 700;

  }

  .pcbFirstColumn a:hover {

      color: #16a085;

  }

  .priceoptions {

      width: 100%;

      margin-top: 5px;

  }

  .priceoptions td {

      padding: 8px 12px;

      font-size: 14px;

      text-align: left;

  }

  .priceoptions tr:hover {

      background-color: #f0fdf9;

  }

  .inner-table {

      width: 100%;

      border: none;

      background: none;

  }

  .inner-table tbody tr {

      background: none;

      border-bottom: 1px solid #f0f0f0;

  }

  .inner-table tbody tr:last-child {

      border-bottom: none;

  }

  .inner-table td {

      border: none;

      padding: 8px 16px 8px 0;

      text-align: left;

  }

  /\* 响应式优化，仅表格 \*/

  @media (max-width: 768px) {

\#pcbtablediv {

      padding: 12px 8px;

      border-width: 1px;

    }

    .pcbgrid th, .pcbgrid td {

      padding: 10px 8px;

      font-size: 13px;

    }

  }

  /\* --------- 结果展示表格样式优化结束 --------- \*/



  /\* 其余表单、按钮等样式保持原样 \*/

  .pcbgrid img.star,

  .pcbgrid img.halfStar,

  .pcbgrid img.emptyStar {

      width: 14px;

      height: 14px;

      margin-right: 2px;

  }

  .pcbShippingColumn b,

  .pcbDaysColumn {

      font-weight: 600;

  }

  .subrow {

      background-color: #f9f9f9;

  }

  .subrow .subrowCell {

      padding: 15px 20px;

  }

  .yellowTagLabel {

      background-color: #F8B248;

      color: #fff;

      padding: 3px 8px;

      border-radius: 3px;

      font-size: 11px;

      font-weight: 700;

      text-transform: uppercase;

      margin-right: 8px;

  }

  .orderBtn {

      background-color: #DA4453;

      color: #fff;

      padding: 8px 15px;

      border-radius: 4px;

      text-decoration: none;

      cursor: pointer;

      display: inline-block;

      font-size: 12px;

      text-transform: uppercase;

      font-weight: 600;

  }

  .orderBtn:hover {

      background-color: #363636;

      color: #fff;

  }

  .priceListAd {

      background-color: #fffef8;

  }

  /\* 新增：option-group按钮active样式 \*/

  .option-group button.active {

    border: 2px solid #1abc9c;

    background: #e6fff2;

    color: #1abc9c;

    box-shadow: 0 0 2px #1abc9c;

  }

  /\* 新增：绿色大号Get Price按钮样式 \*/

  .submit-btn {

    margin-top: 32px;

    margin-bottom: 16px;

    padding: 14px 32px;

    background: #1abc9c;

    color: #fff;

    border: none;

    border-radius: 10px;

    font-size: 22px;

    font-weight: bold;

    cursor: pointer;

    min-width: 160px;

    box-shadow: 0 2px 8px rgba(26,188,156,0.12);

    letter-spacing: 1px;

    transition: background 0.2s;

  }

  .submit-btn:hover {

    background: #16a085;

  }

  .submit-btn:disabled {

    background: #ccc;

    cursor: not-allowed;

  }

  /\* Solder Mask Color 选项统一背景色 #f5f5f5，文本反映颜色 \*/

  .option-group\[data-name="solderMask"] button {

    background: #f5f5f5 !important;

    color: #222 !important;

    border: 1.5px solid #dadada;

    font-weight: bold;

    transition: color 0.2s;

  }

  .option-group\[data-name="solderMask"] button\[data-color="Green"] { color: green !important; }

  .option-group\[data-name="solderMask"] button\[data-color="Red"] { color: #d32f2f !important; }

  .option-group\[data-name="solderMask"] button\[data-color="Yellow"] { color: #fbc02d !important; }

  .option-group\[data-name="solderMask"] button\[data-color="Blue"] { color: #1976d2 !important; }

  .option-group\[data-name="solderMask"] button\[data-color="White"] { color: #888 !important; }

  .option-group\[data-name="solderMask"] button\[data-color="Black"] { color: #222 !important; }

  .option-group\[data-name="solderMask"] button\[data-color="Purple"] { color: #8e24aa !important; }

  .option-group\[data-name="solderMask"] button\[data-color="Matte Black"] { color: #444 !important; }

  .option-group\[data-name="solderMask"] button.active {

    border: 2px solid #1abc9c;

    box-shadow: 0 0 2px #1abc9c;

    background: #e0f7fa !important;

  }

</style>

</head>

<body>

  <div class="pcb-form">

    <h2>PCB Quality Assurance Form</h2>

    <div class="alert error" id="errorAlert"></div>

    <div class="alert success" id="successAlert"></div>



    <!-- PCB 类型（已隐藏） -->

    <div class="form_common" style="display:none;">

      <label>PCB Type:</label>

      <div class="option-group" data-name="pcbType">

        <button class="active">FR-4</button>

        <button>Aluminum</button>

        <button>Flex</button>

        <button>Copper Core</button>

        <button>Rogers</button>

      </div>

    </div>

    <!-- 表面处理 -->

    <div class="form_common">

      <label>Surface Finish:</label>

      <div class="option-group" data-name="surfaceFinish">

        <button class="active">HASL with Lead</button>

        <button>HASL Lead Free</button>

        <button>ENIG</button>

        <button>OSP</button>

      </div>

    </div>

    <!-- 层数 -->

    <div class="form_common">

      <label>Layers:</label>

      <div class="option-group" data-name="layers">

        <button>1</button>

        <button class="active">2</button>

        <button>4</button>

        <button>6</button>

        <button>8</button>

      </div>

    </div>

    <!-- 尺寸 -->

    <div class="form_common">

      <label>Dimensions <span id="unitDisplay">(mm)</span>: <span style="color: #ff4444;">*</span></label>

      <div class="dimension-group">

        <input type="number" id="length" placeholder="Length" min="1" step="0.1">

        <span>×</span>

        <input type="number" id="width" placeholder="Width" min="1" step="0.1">

        <div class="unit-toggle">

          <button class="active" data-unit="mm">mm</button>

          <button data-unit="inch">inch</button>

        </div>

      </div>

    </div>

    <!-- 数量 -->

    <div class="form_common">

      <label>Quantity: <span style="color: #ff4444;">*</span></label>

      <select id="quantity">

        <option value="5" selected>5</option>

        <option value="10">10</option>

        <option value="15">15</option>

        <option value="20">20</option>

        <option value="30">30</option>

        <option value="40">40</option>

        <option value="50">50</option>

        <option value="100">100</option>

        <option value="150">150</option>

        <option value="200">200</option>

        <option value="300">300</option>

        <option value="400">400</option>

        <option value="500">500</option>

        <option value="600">600</option>

      </select>

    </div>

    <!-- 厚度 -->

    <div class="form_common">

      <label>Thickness <span id="thicknessUnit">(mm)</span>:</label>

      <div class="option-group" data-name="thickness">

        <button>0.6</button>

        <button>0.8</button>

        <button>1.0</button>

        <button class="active">1.6</button>

        <button>2.0</button>

        <button>2.5</button>

      </div>

    </div>

    <!-- 阻焊颜色 -->

    <div class="form_common">

      <label>Solder Mask Color:</label>

      <div class="option-group" data-name="solderMask">

        <button class="active" data-color="Green">Green</button>

        <button data-color="Red">Red</button>

        <button data-color="Yellow">Yellow</button>

        <button data-color="Blue">Blue</button>

        <button data-color="White">White</button>

        <button data-color="Black">Black</button>

        <button data-color="Purple">Purple</button>

        <button data-color="Matte Black">Matte Black</button>

      </div>

    </div>

    <!-- 丝印颜色 -->

    <div class="form_common">

      <label>Silkscreen Color:</label>

      <div class="option-group" data-name="silkscreen">

        <button class="active">White</button>

        <button>Black</button>

        <button>Red</button>

        <button>Yellow</button>

        <button>Green</button>

      </div>

    </div>

    <!-- 铜厚 -->

    <div class="form_common">

      <label>Copper Weight:</label>

      <div class="option-group" data-name="copperWeight">

        <button class="active">1oz</button>

        <button>2oz</button>

      </div>

    </div>

    <!-- 查询按钮 -->

    <button class="submit-btn" id="submitOrder">

      <div class="loading-spinner" id="loadingSpinner"></div>

      <span id="buttonText">Get Price</span>

    </button>



    <!-- 货币切换器，插入在结果表格上方 -->

    <div style="max-width:1200px;margin:0 auto 10px auto;text-align:right;">

      <label for="currencySwitcher" style="font-weight:600;margin-right:8px;">Currency:</label>

      <select id="currencySwitcher" style="padding:6px 14px;font-size:15px;border-radius:6px;border:1.5px solid #1abc9c;">

        <option value="USD" selected>USD ($)</option>

        <option value="JPY">JPY (¥)</option>

      </select>

    </div>



    <!-- 进度条 -->

    <div class="progress-container" id="progressContainer">

      <div class="progress-bar" id="progressBar"></div>

      <div class="progress-text" id="progressText">Checking suppliers...</div>

    </div>

    <!-- 结果展示区 -->

    <div id="pcbtablediv">

      <div id="quoteResults"></div>

    </div>

    <!-- 历史记录区 -->

    <div id="historyResults"></div>

  </div>

  <script>

    // 全局变量

    let currentUnit = 'mm';

    let isSubmitting = false;

    let cache = new Map();



    // 单位转换

    const unitConversions = {

      'mm_to_inch': (value) => (value / 25.4).toFixed(4),

      'inch_to_mm': (value) => (value * 25.4).toFixed(2)

    };



    // 初始化

    document.addEventListener('DOMContentLoaded', function() {

      initializeEventListeners();

      setupUnitToggle();

      setupValidation();

      showHistory();

    });



    function initializeEventListeners() {

      document.querySelectorAll(".option-group").forEach(group => {

        group.addEventListener("click", (e) => {

          if (e.target.tagName === "BUTTON") {

            group.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));

            e.target.classList.add("active");

            clearFormErrors();

          }

        });

      });

      // 数量下拉框不需要active

      document.getElementById("submitOrder").addEventListener("click", handleSubmit);

      \['length', 'width'].forEach(id => {

        document.getElementById(id).addEventListener('input', clearFieldError);

        document.getElementById(id).addEventListener('blur', validateField);

      });

    }



    function setupUnitToggle() {

      document.querySelector('.unit-toggle').addEventListener('click', (e) => {

        if (e.target.tagName === 'BUTTON') {

          const newUnit = e.target.dataset.unit;

          if (newUnit !== currentUnit) {

            convertDimensions(currentUnit, newUnit);

            currentUnit = newUnit;

            document.querySelectorAll('.unit-toggle button').forEach(btn => btn.classList.remove('active'));

            e.target.classList.add('active');

            document.getElementById('unitDisplay').textContent = \`(${newUnit})\`;

            document.getElementById('thicknessUnit').textContent = \`(${newUnit === 'mm' ? 'mm' : 'inch'})\`;

            updateThicknessOptions(newUnit);

          }

        }

      });

    }



    function convertDimensions(fromUnit, toUnit) {

      const lengthInput = document.getElementById('length');

      const widthInput = document.getElementById('width');

      if (lengthInput.value) {

        lengthInput.value = unitConversions\[\`${fromUnit}\_to\_${toUnit}\`](parseFloat(lengthInput.value));

      }

      if (widthInput.value) {

        widthInput.value = unitConversions\[\`${fromUnit}\_to\_${toUnit}\`](parseFloat(widthInput.value));

      }

    }



    function updateThicknessOptions(unit) {

      const thicknessGroup = document.querySelector('\[data-name="thickness"]');

      const buttons = thicknessGroup.querySelectorAll('button');

      const mmValues = \['0.6', '0.8', '1.0', '1.6', '2.0', '2.5'];

      const inchValues = \['0.024', '0.031', '0.039', '0.063', '0.079', '0.098'];

      const values = unit === 'mm' ? mmValues : inchValues;

      buttons.forEach((btn, index) => {

        btn.textContent = values\[index];

      });

    }



    function setupValidation() {

      window.validationRules = {

        length: { required: true, min: 0.1, message: 'Length must be greater than 0' },

        width: { required: true, min: 0.1, message: 'Width must be greater than 0' }

      };

    }



    function validateField(e) {

      const field = e.target;

      const rules = window.validationRules\[field.id];

      if (rules) {

        const value = parseFloat(field.value);

        const isEmpty = !field.value.trim();

        const isInvalid = isEmpty || isNaN(value) || value < rules.min;

        if (isInvalid) {

          field.classList.add('error');

          showFieldError(field.id, rules.message);

          return false;

        } else {

          field.classList.remove('error');

          hideFieldError(field.id);

          return true;

        }

      }

      return true;

    }



    function validateAllFields() {

      let isValid = true;

      \['length', 'width'].forEach(id => {

        const field = document.getElementById(id);

        const fieldValid = validateField({ target: field });

        if (!fieldValid) isValid = false;

      });

      return isValid;

    }



    function clearFieldError(e) {

      const field = e.target;

      if (field.classList.contains('error') && field.value.trim()) {

        field.classList.remove('error');

        hideFieldError(field.id);

      }

    }



    function showFieldError(fieldId, message) {

      const errorElement = document.getElementById(fieldId === 'length' || fieldId === 'width' ? 'dimensionError' : \`${fieldId}Error\`);

      if (errorElement) {

        errorElement.textContent = message;

        errorElement.style.display = 'block';

      }

    }



    function hideFieldError(fieldId) {

      const errorElement = document.getElementById(fieldId === 'length' || fieldId === 'width' ? 'dimensionError' : \`${fieldId}Error\`);

      if (errorElement) {

        errorElement.style.display = 'none';

      }

    }



    function clearFormErrors() {

      document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

      document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

      hideAlert();

    }



    function showAlert(message, type = 'error') {

      const alertElement = document.getElementById(type === 'error' ? 'errorAlert' : 'successAlert');

      alertElement.textContent = message;

      alertElement.style.display = 'block';

      if (type === 'error') {

        document.getElementById('successAlert').style.display = 'none';

      } else {

        document.getElementById('errorAlert').style.display = 'none';

      }

    }



    function hideAlert() {

      document.getElementById('errorAlert').style.display = 'none';

      document.getElementById('successAlert').style.display = 'none';

    }



    function collectFormData() {

      const data = {

        pcb: {

          type: '',

          layers: 0,

          dimensions: { length: 0, width: 0, unit: currentUnit },

          thickness: 0,

          quantity: 0

        },

        specifications: {

          surfaceFinish: '',

          solderMask: '',

          silkscreen: '',

          copperWeight: ''

        }

      };

      document.querySelectorAll(".option-group").forEach(group => {

        const name = group.getAttribute("data-name");

        const activeBtn = group.querySelector(".active");

        if (name && activeBtn) {

          const value = activeBtn.textContent.trim();

          switch(name) {

            case 'pcbType':

              data.pcb.type = value;

              break;

            case 'layers':

              data.pcb.layers = parseInt(value);

              break;

            case 'thickness':

              data.pcb.thickness = parseFloat(value);

              break;

            case 'surfaceFinish':

              data.specifications.surfaceFinish = value;

              break;

            case 'solderMask':

              data.specifications.solderMask = value;

              break;

            case 'silkscreen':

              data.specifications.silkscreen = value;

              break;

            case 'copperWeight':

              data.specifications.copperWeight = value;

              break;

          }

        }

      });

      data.pcb.dimensions.length = parseFloat(document.getElementById("length").value) || 0;

      data.pcb.dimensions.width = parseFloat(document.getElementById("width").value) || 0;

      data.pcb.quantity = parseInt(document.getElementById("quantity").value) || 0;

      return data;

    }



    function generateCacheKey(data) {

      return JSON.stringify(data);

    }



    function setSubmittingState(submitting) {

      isSubmitting = submitting;

      const button = document.getElementById('submitOrder');

      const spinner = document.getElementById('loadingSpinner');

      const buttonText = document.getElementById('buttonText');

      const progressContainer = document.getElementById('progressContainer');

      button.disabled = submitting;

      if (submitting) {

        spinner.style.display = 'inline-block';

        buttonText.textContent = 'Getting Prices...';

        progressContainer.style.display = 'block';

        simulateProgress();

      } else {

        spinner.style.display = 'none';

        buttonText.textContent = 'Get Price';

        progressContainer.style.display = 'none';

      }

    }



    function simulateProgress() {

      const progressBar = document.getElementById('progressBar');

      const progressText = document.getElementById('progressText');

      const steps = [

        { progress: 20, text: 'Validating parameters...' },

        { progress: 40, text: 'Contacting suppliers...' },

        { progress: 60, text: 'Comparing quotes...' },

        { progress: 80, text: 'Calculating shipping...' },

        { progress: 100, text: 'Complete!' }

      ];

      let currentStep = 0;

      const interval = setInterval(() => {

        if (currentStep < steps.length && isSubmitting) {

          const step = steps\[currentStep];

          progressBar.style.width = step.progress + '%';

          progressText.textContent = step.text;

          currentStep++;

        } else {

          clearInterval(interval);

        }

      }, 800);

    }



    // 外部API基础URL

    const API_BASE = '';



    // fetchSupplierQuotes: 只请求一次接口，不轮询

    async function fetchSupplierQuotes(params) {

      const resp = await fetch(\`${API_BASE}/get-quotes\`, {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ params })

      });

      const data = await resp.json();

      if (!data.request_id) throw new Error('Failed to get request_id');

      // 增加1.5秒延迟，等待后端写入redis

      await new Promise(r => setTimeout(r, 2000));

      const res = await fetch(\`${API_BASE}/quotes/${data.request_id}\`);

      const result = await res.json();

      if (!result || !result.quotes) throw new Error('No quote result');

      return result.quotes;

    }



    // 轮询获取部分结果，直到全部完成

    async function fetchSupplierQuotes(params, onPartialUpdate) {

      const resp = await fetch(\`${API_BASE}/get-quotes\`, {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ params })

      });

      const data = await resp.json();

      if (!data.request_id) throw new Error('Failed to get request_id');

      const requestId = data.request_id;



      let completed = false;

      while (!completed) {

        const res = await fetch(\`${API_BASE}/quotes/${requestId}\`);

        const result = await res.json();

        if (result && result.quotes) {

          // 每次都刷新（无论是否有新supplier）

          if (onPartialUpdate) {

            onPartialUpdate(result.quotes);

          }

          if (result.status === "completed") {

            completed = true;

            return result.quotes;

          }

        }

        await new Promise(r => setTimeout(r, 1200)); // 1.2秒轮询一次

      }

    }



    // quotes 数据转换为展示用结构

    function convertApiQuotesToDisplay(apiQuotes, qty, color) {

      const result = \[];

      for (const \[supplier, data] of Object.entries(apiQuotes)) {

        let pcbList = \[];

        let logisticList = \[];



        // PCBWAY

        if (supplier.toLowerCase().includes('pcbway') && data.pcbway) {

          // PCB

          if (Array.isArray(data.pcbway.PCB_options) && data.pcbway.PCB_options.length > 0) {

            pcbList = data.pcbway.PCB_options;

          } else if (Array.isArray(data.pcbway.PCB) && data.pcbway.PCB.length > 0) {

            pcbList = data.pcbway.PCB;

          }

          // 物流

          if (data.pcbway.logistic && Array.isArray(data.pcbway.logistic.carriers)) {

            logisticList = data.pcbway.logistic.carriers;

          }

        }

        // PCBGO/ELECROW

        else if (Array.isArray(data.PCB) && data.PCB.length > 0) {

          pcbList = data.PCB;

          // 物流

          if (Array.isArray(data.shipping_options) && data.shipping_options.length > 0) {

            // 兼容性处理

            logisticList = data.shipping_options.map(opt => ({

              ...opt,

              currency: opt.currency || "USD"

            }));

          } else if (data.logistic && Array.isArray(data.logistic.carriers) && data.logistic.carriers.length > 0) {

            logisticList = data.logistic.carriers;

          }

        }

        // PCB_options（极少数情况）

        else if (Array.isArray(data.PCB_options) && data.PCB_options.length > 0) {

          pcbList = data.PCB_options;

        }

        // JLC

        else if (data.price_summary && Array.isArray(data.delivery_options)) {

          pcbList = data.delivery_options.map(opt => ({

            type: opt.type,

            price_usd: (parseFloat(data.price_summary.total_price) + (parseFloat(opt.price) || 0)).toFixed(2),

            delivery_days: opt.days,

            currency: "USD"

          }));

          if (Array.isArray(data.shipping_options)) {

            logisticList = data.shipping_options.map(opt => ({

              ...opt,

              currency: opt.currency || "USD"

            }));

          }

        }

        // 兜底：直接数组

        else if (Array.isArray(data)) {

          pcbList = data;

        }



        // 统一格式化物流 carrier 字段名

        logisticList = (logisticList || \[]).map(carrier => ({

          name: carrier.name || carrier.carrier || '--',

          money: carrier.money !== undefined ? carrier.money : (carrier.price !== undefined ? carrier.price : '--'),

          days: carrier.days || '--',

          symbol: carrier.tip_msg || carrier.currency || '',

          tip: carrier.tip || '',

          tip_msg: carrier.tip_msg || '',

          pic: carrier.pic || carrier.logo || ''

        }));



        result.push({

          supplier,

          pcbList,

          logisticList,

          color,

          qty

        });

      }

      return result;

    }



    // 修改 showSupplierBlocks 函数

    function showSupplierBlocks(suppliers) {

      window.lastSuppliersData = suppliers; // 保存数据以便切换货币时刷新

      const container = document.getElementById('quoteResults');

      if (!suppliers || suppliers.length === 0) {

        container.innerHTML = '<div style="text-align:center;color:#888;">No quote data.</div>';

        document.getElementById('progressText').textContent = 'Waiting...';

        return;

      }

      let html = '';

      const cur = window.currentCurrency || 'USD';

      const symbol = getCurrencySymbol(cur);

      html += `<table class="pcbgrid">

        <thead>

          <tr>

            <th>Supplier</th>

            <th>Type</th>

            <th>Total Price</th>

            <th>Unit Price</th>

            <th>Shipping</th>

          </tr>

        </thead>

        <tbody>

      `;

      suppliers.forEach(s => {

        let typeCells = '', totalPriceCells = '', unitPriceCells = '';

        if (s.pcbList && s.pcbList.length > 0) {

          s.pcbList.forEach(opt => {

            let totalUSD = parseFloat(opt.price_usd || opt.price || 0);

            let qty = s.qty || 1;

            let total = convertCurrency(totalUSD, 'USD', cur);

            let unitPrice = qty > 0 ? (total / qty) : 0;

            typeCells += `<div>${opt.type || '--'}</div>`;

            totalPriceCells += `<div>${symbol}${total ? total.toFixed(cur === 'JPY' ? 0 : 2) : '--'}</div>`;

            unitPriceCells += `<div>${symbol}${unitPrice ? unitPrice.toFixed(cur === 'JPY' ? 0 : 2) : '--'}</div>`;

          });

        } else {

          typeCells = totalPriceCells = unitPriceCells = `<div style="color:#888;">No PCB price data</div>`;

        }



        // 物流表

        let shippingHtml = '';

        if (s.logisticList && s.logisticList.length > 0) {

          shippingHtml = '<table class="priceoptions">';

          s.logisticList.forEach(lg => {

            let moneyUSD = parseFloat(lg.money || 0);

            let money = convertCurrency(moneyUSD, 'USD', cur);

            shippingHtml += `<tr>

              <td>${lg.name}</td>

              <td>${symbol}${money ? money.toFixed(cur === 'JPY' ? 0 : 2) : '--'}</td>

              <td>${lg.days}</td>

            </tr>`;

          });

          shippingHtml += '</table>';

        } else {

          shippingHtml = '<span style="color:#888;">No shipping data</span>';

        }



        html += `

          <tr>

            <td class="pcbFirstColumn">${s.supplier}</td>

            <td>${typeCells}</td>

            <td class="number">${totalPriceCells}</td>

            <td class="number">${unitPriceCells}</td>

            <td>${shippingHtml}</td>

          </tr>

        `;

      });

      html += '</tbody></table>';

      container.innerHTML = html;



      // 新增：动态显示已获取供应商数量

      const count = suppliers.length;

      document.getElementById('progressText').textContent = \`${count} Suppliers respond...\`;

    }



    // 货币符号

    function getCurrencySymbol(currency) {

      return currency === 'JPY' ? '¥' : '$';

    }



    // 金额转换

    function convertCurrency(amount, from, to) {

      if (from === to) return amount;

      if (from === 'USD' && to === 'JPY') return amount * window.USD_TO_JPY;

      if (from === 'JPY' && to === 'USD') return amount / window.USD_TO_JPY;

      return amount;

    }



    // 汇率全局变量（初始为150，后续自动更新）

    window.USD_TO_JPY = 150;



    // 获取实时汇率（仅每日首次获取，后续当天沿用）

    async function updateExchangeRate() {

      const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd

      const cacheKey = 'USD_TO\_JPY\_' + today;

      const cached = localStorage.getItem(cacheKey);

      if (cached) {

        window.USD_TO_JPY = parseFloat(cached);

        return;

      }

      try {

        const resp = await fetch('https://v6.exchangerate-api.com/v6/04c0ac7e197cb98292070aca/latest/USD');

        const data = await resp.json();

        if (data && data.conversion_rates && data.conversion_rates.JPY) {

          window.USD_TO_JPY = data.conversion_rates.JPY;

          localStorage.setItem(cacheKey, String(window.USD_TO_JPY));

        }

      } catch (e) {

        // 保持默认值

      }

    }



    // 货币切换器事件，切换时刷新汇率并渲染

    document.addEventListener('DOMContentLoaded', function() {

      const currencySwitcher = document.getElementById('currencySwitcher');

      if (currencySwitcher) {

        currencySwitcher.addEventListener('change', async function(e) {

          window.currentCurrency = e.target.value;

          if (window.currentCurrency === 'JPY') {

            await updateExchangeRate();

          }

          showSupplierBlocks(window.lastSuppliersData || \[]);

        });

      }

      // 页面首次加载时也拉取一次汇率

      updateExchangeRate();

    });



    // handleSubmit: 点击后立即请求并渲染

    async function handleSubmit(e) {

      e.preventDefault();

      if (isSubmitting) return;

      clearFormErrors && clearFormErrors();

      setSubmittingState && setSubmittingState(true);

      try {

        const formData = collectFormData();

        const params = {

          thickness: formData.pcb.thickness,

          qty: formData.pcb.quantity,

          length: formData.pcb.dimensions.length,

          width: formData.pcb.dimensions.width,

          layer: formData.pcb.layers,

          outer_cu: formData.specifications.copperWeight.replace('oz', ''),

          color: formData.specifications.solderMask,

          surface_finish: formData.specifications.surfaceFinish,

          line_weight: "6/6mil"

        };

        document.getElementById('quoteResults').innerHTML = '<div style="text-align:center;padding:30px;">Loading quotes...</div>';

        // 增量渲染：每次轮询都刷新

        await fetchSupplierQuotes(params, (partialQuotes) => {

          showSupplierBlocks(convertApiQuotesToDisplay(partialQuotes, params.qty, params.color));

        });

        showAlert && showAlert('Price comparison completed successfully!', 'success');

      } catch (error) {

        showAlert && showAlert(\`Failed to get quotes: ${error.message}. Please try again.\`);

        document.getElementById('quoteResults').innerHTML = '';

      } finally {

        setSubmittingState && setSubmittingState(false);

      }

    }



    // 绑定事件

    document.getElementById("submitOrder").addEventListener("click", handleSubmit);



    // 货币切换器全局变量和事件

    window.currentCurrency = 'USD';

    document.addEventListener('DOMContentLoaded', function() {

      const currencySwitcher = document.getElementById('currencySwitcher');

      if (currencySwitcher) {

        currencySwitcher.addEventListener('change', function(e) {

          window.currentCurrency = e.target.value;

          // 这里后续可调用 showSupplierBlocks(window.lastSuppliersData);

        });

      }

    });

  </script>

</body>

</html>

<!--EndFragment-->