/* Blur Auto Clicker 中文界面补丁
 * 说明：本文件只替换 DOM 中"显示给用户"的英文文字，不修改任何设置值、
 * 进程通信参数或业务逻辑。所有原始英文设置键仍然保持原样。
 */

const dict: Record<string, string> = {
  // 导航与主面板
  Simple: "简单模式",
  Advanced: "高级模式",
  Settings: "设置",
  Presets: "预设",
  Zones: "停止区域",
  "Click Points": "点击点位",
  Diagnostics: "诊断",
  Usage: "使用统计",
  Profiles: "配置档案",
  Sounds: "声音",
  Appearance: "外观",
  Behavior: "行为",
  General: "常规",
  Startup: "启动",
  Window: "窗口",
  Keyboard: "键盘",
  Mouse: "鼠标",
  Input: "输入",
  Limits: "限制",
  Position: "位置",
  Mode: "模式",
  Interval: "间隔",
  Rate: "速率",
  "Clicks Per": "点击频率",
  Click: "点击",
  Clicks: "点击次数",
  "Click Mode": "点击模式",
  "Clicker Type": "连点器类型",
  "Clicking time": "点击时长",
  "Average speed": "平均速度",
  "Total clicks": "总点击数",
  "Longest session": "最长会话",
  Sessions: "会话数",
  Streak: "连续天数",
  "weekly totals": "每周汇总",
  "Last 12 months": "最近 12 个月",

  // 通用按钮与状态
  Start: "开始",
  Stop: "停止",
  Reset: "重置",
  Enable: "启用",
  Disable: "禁用",
  Enabled: "已启用",
  Disabled: "已禁用",
  Cancel: "取消",
  Save: "保存",
  Apply: "应用",
  Close: "关闭",
  Open: "打开",
  Back: "返回",
  Done: "完成",
  Continue: "继续",
  Confirm: "确认",
  "Confirm?": "确认吗？",
  Delete: "删除",
  Remove: "移除",
  Rename: "重命名",
  Duplicate: "复制",
  Edit: "编辑",
  Import: "导入",
  Export: "导出",
  Browse: "浏览",
  Preview: "预览",
  Search: "搜索",
  "Clear search": "清除搜索",
  "Try again": "重试",
  Quit: "退出",
  Minimize: "最小化",
  "Minimize window": "最小化窗口",
  "Not now": "暂不",
  "Skip setup": "跳过设置",
  "Run setup again": "重新运行设置",
  "Restart now": "立即重启",
  "Restart to Apply Update": "重启以应用更新",
  "All good": "一切正常",
  "No data": "暂无数据",
  "Something went wrong": "出了点问题",
  "Render crashed": "界面渲染崩溃",
  "Script error": "脚本错误",
  "Disk full": "磁盘已满",
  Error: "错误",
  Warning: "警告",
  Success: "成功",
  Info: "信息",
  Danger: "危险",
  Modified: "已修改",
  Recovered: "已恢复",
  "Show less": "收起",
  More: "更多",
  Less: "更少",
  "Join": "加入",
  "Open Folder": "打开文件夹",
  "Overwrite": "覆盖",

  // 点击行为
  "Toggle": "切换",
  "Hold": "按住",
  "Left": "左键",
  "Middle": "中键",
  "Right": "右键",
  "Double Click": "双击",
  "Standard Clicking": "标准点击",
  "Duty Cycle": "占空比",
  "of each cycle": "占每个周期",
  "Every click": "每次点击",
  "Speed Randomization": "速度随机化",
  "Random offset radius in pixels": "随机偏移半径（像素）",
  "Extended Click Speed Limit": "扩展点击速度上限",
  "Extended click speed limit": "扩展点击速度上限",
  "Enable extended click speed limit?": "是否启用扩展点击速度上限？",
  "Allow more than 10 per second": "允许超过每秒 10 次",
  "Click Speed": "点击速度",
  "Fast": "快速",
  "Per Click": "每次点击",
  "Input Type": "输入类型",
  "Master Key Mode": "主键模式",
  "Master Key": "主键",
  "Master Switch": "总开关",
  "MASTER OFF": "总开关关闭",
  "Master switch off — clicker blocked": "总开关已关闭 — 连点器被阻止",
  "Strict Hotkey Modifiers": "严格热键修饰键",
  "Hotkey": "热键",
  "Keybinds": "快捷键",
  "Edit Hotkey": "编辑热键",
  "Clear hotkey": "清除热键",
  "Clear key": "清除按键",

  // 位置 / 点位 / 区域
  "Pick on screen": "在屏幕上拾取",
  "Start Picking": "开始拾取",
  "Click Point Defaults": "点击点位默认值",
  "Delete click point": "删除点击点位",
  "Reorder click point": "调整点位顺序",
  "No click points yet": "还没有点击点位",
  "Add Zone": "添加区域",
  "Delete zone": "删除区域",
  "No zones yet": "还没有停止区域",
  "Custom Stop Zones": "自定义停止区域",
  "Corner Stop": "角落停止",
  "Edge Stop": "边缘停止",
  "Bottom edge failsafe": "底部边缘保护",
  "Bottom-left corner failsafe": "左下角保护",
  "Bottom-right corner failsafe": "右下角保护",
  "Default Radius": "默认半径",
  "Small radius": "小半径",
  "Medium radius": "中半径",
  "Large radius": "大半径",
  "Distance From Edge X": "距边缘 X 距离",
  "Distance From Edge Y": "距边缘 Y 距离",
  "Vertical offset": "垂直偏移",
  "Stop Zone Overlay": "停止区域浮层",

  // 限制与停止
  "Click Countdown": "点击倒计时",
  "Click Indicator": "点击指示器",
  "Stop When Complete": "完成时停止",
  "Stop when complete": "完成时停止",
  "Stop on Alt+Tab": "切换窗口时停止",
  "Blocked by Alt+Tab": "因切换窗口而停止",
  "Blocked by process list": "因进程列表而停止",
  "Stop Reason Alert": "停止原因提醒",
  "Show While Clicking": "点击时显示",
  "Disabled while clicking": "点击时禁用",
  "Task Manager": "任务管理器",
  "task manager": "任务管理器",
  "Always on Top": "始终置顶",
  "Close to Tray": "关闭时最小化到托盘",
  "Taskbar Icon": "任务栏图标",
  "Remember Window Position": "记住窗口位置",
  "Window Opacity": "窗口不透明度",
  "Overlay size": "浮层大小",
  "Show the overlay": "显示浮层",

  // 进程过滤
  "Process List": "进程列表",
  "Whitelist": "白名单",
  "Blacklist": "黑名单",
  "Apps": "应用",
  "Global": "全局",
  "Individual": "单独设置",

  // 提示弹窗与引导
  "First-time setup": "首次设置",
  "First time setup": "首次设置",
  "Overlay": "浮层",
  "Start and Stop sounds": "开始与停止提示音",
  "Everything can be changed later in the settings.": "之后都可以在设置里修改。",
  "Turns the start and stop sounds on or off together.": "同时开启或关闭开始与停止提示音。",
  "Plays as clicking begins.": "开始点击时播放。",
  "Plays when clicking stops, failsafes included.": "停止点击时播放，包括安全保护触发的停止。",
  "Appears in the corner you pick in Settings.": "显示在设置中选择的角落。",
  "Sized in pixels. Changing it shows a preview on screen.": "以像素为单位，修改后会在屏幕上预览。",
  "You've reached": "你已达成",
  "No, Thank you": "不用了，谢谢",
  "Support Me": "支持我",
  "Thank you.": "谢谢。",
  "Enjoy the autoclicker.": "祝你使用愉快。",
  "Every bit helps.": "每一份支持都有帮助。",
  "Thanks for using it.": "感谢使用。",
  "Administrator Window Notice": "管理员窗口提示",
  "Administrator window prompt": "管理员窗口提醒",
  "An administrator window has focus": "当前焦点位于管理员窗口",
  "Windows blocks normal apps from clicking or typing into an administrator window. Restart Blur Auto Clicker as administrator to click it.":
    "Windows 会阻止普通程序点击或输入管理员窗口。请以管理员身份重启 Blur Auto Clicker 后再点击它。",
  "Administrator account required": "需要管理员账户",
  "Restarting…": "正在重启…",
  "Restart as administrator": "以管理员身份重启",
  "Restart as administrator?": "以管理员身份重启？",
  "Restart without administrator rights?": "不使用管理员权限重启？",
  "Run as Administrator": "以管理员身份运行",
  "Always start as administrator": "始终以管理员身份启动",
  "Not running as administrator.": "当前未以管理员身份运行。",
  "Running as administrator. Turn this off to restart without the rights.":
    "当前以管理员身份运行。关闭此项可在无管理员权限下重启。",
  "Starts as administrator on the next launch.": "下次启动时将以管理员身份运行。",
  "Could not restart. It starts as administrator on the next launch.":
    "重启失败，下次启动时将以管理员身份运行。",
  "Auto clicker enabled": "连点器已启用",
  "Auto clicker disabled": "连点器已停用",

  // 声音
  "Play sounds": "播放提示音",
  "Mute all sounds": "静音全部提示音",
  "Master volume": "主音量",
  "Sound volume": "音量",
  "Volume": "音量",
  "Choose sound": "选择声音",
  "Sound file": "声音文件",
  "Sound Icon": "声音图标",
  "Recent sound files": "最近的声音文件",
  "Search files": "搜索文件",
  "Search files in recent sounds": "搜索最近的声音文件",
  "Use default sound": "使用默认声音",
  "Remove from history": "从历史记录中移除",
  "Trim and volume": "剪辑与音量",
  "enable.wav": "启用.wav",
  "disable.wav": "停用.wav",

  // 外观与主题
  "Theme": "主题",
  "Theme & Accent": "主题与强调色",
  "Accent": "强调色",
  "Accent Color": "强调色",
  "Accent color": "强调色",
  "Custom Color": "自定义颜色",
  "Indicator custom color": "指示器自定义颜色",
  "Hex color value": "十六进制颜色值",
  "Theme editor": "主题编辑器",
  "Theme customizer": "主题自定义",
  "Theme profiles": "主题配置",
  "Create custom theme": "创建自定义主题",
  "Edit custom theme": "编辑自定义主题",
  "Cancel new theme": "取消新建主题",
  "New profile": "新建配置",
  "Profile name": "配置名称",
  "Profile actions": "配置操作",
  "No custom themes yet": "还没有自定义主题",
  "Color palettes": "配色方案",
  "Color": "颜色",
  "Alpha": "透明度",
  "Hue": "色相",
  "Saturation and brightness": "饱和度与亮度",
  "Gamma": "伽马",
  "Background": "背景",
  "Background Blur": "背景模糊",
  "Background Media": "背景媒体",
  "Background Media Opacity": "背景媒体不透明度",
  "Background Opacity": "背景不透明度",
  "Background Strength": "背景强度",
  "Panel": "面板",
  "Panel Blur": "面板模糊",
  "Panel Opacity": "面板不透明度",
  "Border": "边框",
  "Border focus": "焦点边框",
  "Border subtle": "细微边框",
  "Container shadow": "容器阴影",
  "Modal shadow": "弹窗阴影",
  "Divider": "分隔线",
  "Text": "文字",
  "Text dim": "暗色文字",
  "Text muted": "弱化文字",
  "Danger text": "危险文字",
  "App Font": "应用字体",
  "Title Font": "标题字体",
  "Fancy Title": "艺术标题",
  "Reset font": "重置字体",
  "Reset to default font": "恢复默认字体",
  "Interface Scale": "界面缩放",
  "Scale": "缩放",
  "Increase interface scale": "放大界面",
  "Decrease interface scale": "缩小界面",
  "Icon Theme": "图标主题",
  "Icon Color": "图标颜色",
  "Active Icon": "活动图标",
  "Shape": "形状",
  "Size": "大小",
  "Page Style": "页面样式",
  "Banner": "横幅",
  "Banner text": "横幅文字",
  "Banner button": "横幅按钮",
  "Active": "活动",
  "Off": "关闭",
  "On": "开启",
  "Beta": "测试版",

  // 指示器
  "Indicator": "指示器",
  "Flash On Click": "点击时闪烁",
  "Flash Dim": "闪烁变暗",
  "Countdown Text": "倒计时文字",
  "Window corner": "窗口角落",
  "bottom-left": "左下",
  "bottom-right": "右下",
  "top-left": "左上",
  "top-right": "右上",
  "OverLay size": "浮层大小",

  // 预设
  "Preset Name": "预设名称",
  "Preset name": "预设名称",
  "No preset active": "当前没有生效的预设",
  "Save the current settings into this preset": "将当前设置保存到此预设",
  "Go to presets": "前往预设",
  "Export preset": "导出预设",
  "Simple Page": "简单模式页",
  "Advanced Page": "高级模式页",
  "Settings Page": "设置页",
  "Click Points Page": "点击点位页",
  "Zones Page": "停止区域页",

  // 更新与统计
  "Update available banner": "更新提示横幅",
  "Update preview": "更新预览",
  "Could not load the changelog.": "无法加载更新日志。",
  "Loading changelog...": "正在加载更新日志…",
  "Close changelog preview": "关闭更新日志预览",
  "View on GitHub": "在 GitHub 上查看",
  "GitHub": "GitHub",
  "Discord": "Discord",
  "Ko-fi": "Ko-fi",
  "Twitch": "Twitch",
  "YouTube": "YouTube",
  "Need help? Join the Discord": "需要帮助？加入 Discord",
  "Support me on Ko-fi": "在 Ko-fi 上支持我",
  "Donation reminder": "捐赠提醒",
  "Version": "版本",
  "Measure": "测量",
  "Hit": "命中",
  "Final": "最终",
  "Newest change": "最新变更",
  "Oldest change": "最早变更",

  // 补充文案
  "All": "全部",
  "Built-in": "内置",
  "Dev tools": "开发工具",
  "Default Clicks": "默认点击次数",
  "Search templates": "搜索模板",
  "Start from a template": "从模板开始",
  "Input off": "输入关闭",
  "Middle change": "中键切换",
  "Notices": "公告",
  "Pause": "暂停",
  "Resize window": "调整窗口大小",
  "Status Bar": "状态栏",
  "Time range": "时间范围",
  "Small UI improvements;": "界面细节优化；",
  "Raised": "凸起",
  "Fun": "趣味",
  "Maintenance": "维护",
  "Custom 1": "自定义 1",
  "Day": "天",
  "Hour": "小时",
  "Minute": "分钟",
  "Second": "秒",
  "Time": "时间",
  "System": "系统",
  "Reset All Settings": "重置所有设置",
  "Reset all settings": "重置所有设置",
  "Reset Usage Data": "重置使用数据",
  "Reset usage data": "重置使用数据",
  "Reset all to defaults": "全部恢复默认值",
  "Run on Startup": "开机启动",
};

const rules: Array<[RegExp, string | ((...args: string[]) => string)]> = [
  [/^Step (\d+) of (\d+)$/, (_m, a, b) => `第 ${a} 步，共 ${b} 步`],
  [/^Updates from v(.+?) to (.+)$/, (_m, a, b) => `从 v${a} 更新到 ${b}`],
  [/^(.+) is running as administrator$/, (_m, a) => `${a} 正在以管理员身份运行`],
  [/^A small overlay in the top-right corner$/, () => "位于右上角的小浮层"],
  [/^A small overlay in the top-left corner$/, () => "位于左上角的小浮层"],
  [/^A small overlay in the bottom-right corner$/, () => "位于右下角的小浮层"],
  [/^A small overlay in the bottom-left corner$/, () => "位于左下角的小浮层"],
  [/^([\d,]+) clicks recorded so far$/, (_m, a) => `迄今已记录 ${a} 次点击`],
  [/^([\d.]+) hours of clicking recorded so far$/, (_m, a) => `迄今已记录 ${a} 小时点击`],
  [/^(\d+) million clicks$/, (_m, a) => `${a} 百万次点击`],
  [/^(\d+) hours of clicking$/, (_m, a) => `${a} 小时点击`],
  [/^(\d+) hour of clicking$/, () => "1 小时点击"],
  [/(\d+(?:\.\d+)?)\s*clicks/g, "$1 次点击"],
  [/^(\d+)\s*px$/, (_m, a) => `${a} 像素`],
];

const TRANSLATED_ATTRS = ["title", "placeholder", "aria-label", "alt"] as const;
const SKIP_TAGS = new Set(["STYLE", "SCRIPT", "NOSCRIPT"]);

const lastText = new WeakMap<Text, string>();
const lastAttr = new WeakMap<Element, Map<string, string>>();

function translateText(node: Text): void {
  const raw = node.nodeValue ?? "";
  if (lastText.get(node) === raw) return;
  if (!raw.trim()) return;

  let out = raw;
  const trimmed = raw.trim();
  const hit = dict[trimmed];

  if (hit) {
    const leading = raw.slice(0, raw.indexOf(trimmed));
    const trailing = raw.slice(raw.indexOf(trimmed) + trimmed.length);
    out = leading + hit + trailing;
  } else {
    for (const [re, rep] of rules) {
      re.lastIndex = 0;
      if (typeof rep === "function") {
        out = out.replace(re, (...args: string[]) => rep(...args));
      } else {
        out = out.replace(re, rep);
      }
    }
  }

  if (out !== raw) {
    lastText.set(node, out);
    node.nodeValue = out;
  }
}

function translateElement(el: Element): void {
  if (SKIP_TAGS.has(el.tagName)) return;

  for (const name of TRANSLATED_ATTRS) {
    const value = el.getAttribute(name);
    if (!value) continue;
    let map = lastAttr.get(el);
    if (!map) {
      map = new Map();
      lastAttr.set(el, map);
    }
    if (map.get(name) === value) continue;
    const translated = dict[value.trim()];
    if (translated) {
      map.set(name, translated);
      el.setAttribute(name, translated);
    }
  }

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let child: Node | null;
  while ((child = walker.nextNode())) {
    if (child.nodeType === Node.TEXT_NODE) translateText(child as Text);
  }
}

function translateAll(): void {
  translateElement(document.body);
  document.title = "Blur 自动连点器";
}

export function installChineseUI(): void {
  translateAll();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        const target = mutation.target;
        if (target.nodeType === Node.TEXT_NODE) {
          translateText(target as Text);
        }
      } else if (mutation.type === "attributes") {
        const target = mutation.target;
        if (target.nodeType === Node.ELEMENT_NODE) {
          translateElement(target as Element);
        }
      } else if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateElement(node as Element);
          } else if (node.nodeType === Node.TEXT_NODE) {
            translateText(node as Text);
          }
        });
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: [...TRANSLATED_ATTRS],
  });
}
