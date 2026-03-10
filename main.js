document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  const i18nElements = document.querySelectorAll('[data-i18n]');
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');

  const translations = {
    zh: {
      'meta.title': 'AI4M · VocalAI - 面向机构的AI声乐教学解决方案',
      'logo.subtitle': 'VocalAI',
      'nav.product': '产品亮点',
      'nav.solution': '解决方案',
      'nav.ai': 'AI 能力',
      'nav.scenarios': '典型场景',
      'nav.demo': '预约演示',
      'hero.tagline': '面向音乐培训机构的 AI 声乐教学基础设施',
      'hero.title.line1': '让每一次练声',
      'hero.title.line2': '都有专业 AI 老师陪练',
      'hero.subtitle':
        'VocalAI 将作业布置、练习提交、智能评估与教学数据统一到一套平台中，帮助机构构建标准化的声乐教学闭环，让老师更专注于“教”，让学生更清楚如何“练”。',
      'hero.cta.primary': '预约一对一产品演示',
      'hero.cta.secondary': '了解 AI 评估能力',
      'hero.meta.target.label': '适用对象',
      'hero.meta.target.value': '声乐培训机构 / 音乐学校',
      'hero.meta.capability.label': '核心能力',
      'hero.meta.capability.value': '作业闭环 · AI 评估 · 作业库',
      'hero.score.label': '综合得分',
      'hero.score.level': 'A · 音准优秀',
      'hero.score.tag1': '音准稳定',
      'hero.score.tag2': '高音控制良好',
      'hero.score.tag3': '咬字略显含混',
      'hero.chart.wave': '波形图',
      'hero.chart.pitch': '音高曲线',
      'hero.footer.model.label': '分析模型',
      'hero.footer.model.value': 'Basic Pitch + 规则打分',
      'hero.footer.comment.label': '评语生成',
      'hero.footer.comment.value': '固定模板 / 大模型',
      'product.title': '围绕“作业闭环”设计的一体化平台',
      'product.subtitle':
        '从布置到评估，每一步都为声乐教学场景而生，帮助机构沉淀可复用的教学资产。',
      'product.card1.title': '标准化作业闭环',
      'product.card1.text':
        '支持老师一键布置练声与歌曲作业，学生在 App 中录制提交，AI 自动完成评估并生成报告，形成完整的「布置-完成-提交-评估-反馈」闭环。',
      'product.card1.item1': '多选学生 / 按班级布置',
      'product.card1.item2': '截止时间与提醒机制',
      'product.card1.item3': '历史作业与评估记录沉淀',
      'product.card2.title': '为声乐场景定制的 AI 评估',
      'product.card2.text':
        '基于 Basic Pitch 音高提取与规则打分，对音准稳定性、高音控制等维度进行量化评分，并输出可视化波形与音高曲线辅助老师判断。',
      'product.card2.item1': '0–100 综合分 + 等级',
      'product.card2.item2': '音高曲线 / 波形图可视化',
      'product.card2.item3': 'AI 评语 + 老师最终确认',
      'product.card3.title': '可持续演进的作业与数据资产',
      'product.card3.text':
        '内置分阶段声乐作业库，支持机构自建作业与版本迭代；通过机构级数据总览，帮助管理者看到真实的教学效果与学员活跃度。',
      'product.card3.item1': '练声 / 歌曲 / 乐理多种类型',
      'product.card3.item2': '按阶段、难度、主题分类',
      'product.card3.item3': '机构维度作业完成率统计',
      'solution.title': '为三类核心角色而设计的解决方案',
      'solution.subtitle':
        '同一套平台，为老师、学生和机构管理者分别提供最贴合日常工作与学习流程的体验。',
      'solution.teacher.badge': '老师视角',
      'solution.teacher.title': '高效管理每一位学生的练习',
      'solution.teacher.text':
        '老师首页即是学生列表，清晰标记未交作业、完成情况与最新评分，一眼看出谁需要重点关注。',
      'solution.teacher.item1': '学生维度作业概况',
      'solution.teacher.item2': '一键布置常用作业组合',
      'solution.teacher.item3': 'AI 评估结果可查看可编辑',
      'solution.student.badge': '学生视角',
      'solution.student.title': '把复杂的声乐练习变成清晰可执行的任务',
      'solution.student.text':
        '学生只需要打开 App 按引导完成练声、歌曲演唱并提交，就能在短时间内看到客观、可理解的反馈。',
      'solution.student.item1': '待办作业清晰分组展示',
      'solution.student.item2': '内置录音/录视频提交',
      'solution.student.item3': '可回看历史作业与评估',
      'solution.org.badge': '机构视角',
      'solution.org.title': '教学质量与运营状况一屏尽览',
      'solution.org.text':
        '机构管理员可统一管理师生账号、作业库与关键指标，用真实数据支撑课程优化与教学决策。',
      'solution.org.item1': '师生账号一站式管理',
      'solution.org.item2': '机构作业库自建与维护',
      'solution.org.item3': '作业完成率与学员活跃度',
      'ai.title': '从 Demo 到可落地的 AI 声乐评估能力',
      'ai.subtitle':
        '基于开源模型与可解释规则构建的 AI 评估引擎，既追求音乐教育的专业性，也兼顾系统的可扩展性与可落地性。',
      'ai.current.title': '当前 Demo 能力',
      'ai.current.item1.label': '音准分析（P0）',
      'ai.current.item1.desc':
        '提取演唱音高序列，对比目标调性与音程，量化音准稳定性。',
      'ai.current.item2.label': '综合得分（P0）',
      'ai.current.item2.desc':
        '基于规则的 0–100 分制评分，并映射为 A–E 等级，便于教学沟通。',
      'ai.current.item3.label': '评语生成（P0）',
      'ai.current.item3.desc':
        '按分数区间匹配固定模板，或调用大模型（如 qwen-turbo）生成自然语言评语。',
      'ai.current.item4.label': '可视化报告（P0）',
      'ai.current.item4.desc': '展示波形与音高曲线，让学生“看见”自己的演唱问题。',
      'ai.roadmap.title': '可演进路线',
      'ai.roadmap.stage1.tag': 'Demo 阶段 · 1–2 周',
      'ai.roadmap.stage1.text':
        '以 Basic Pitch + 规则打分为核心，快速搭建可体验的 AI 评估能力，为机构展示产品方向。',
      'ai.roadmap.stage2.tag': 'MVP · 3–4 个月',
      'ai.roadmap.stage2.text':
        '引入更多声乐维度（节奏、气息、音色等）的评估因子，连接作业布置与机构数据模块，形成完整产品闭环。',
      'ai.roadmap.stage3.tag': '进阶版本',
      'ai.roadmap.stage3.text':
        '支持与示范音频、历史作业的对比分析，提供逐句、逐段的精细化反馈，为专业院校与大型机构提供更高阶的教学工具。',
      'scenarios.title': '典型落地场景',
      'scenarios.subtitle':
        '将 VocalAI 嵌入到声乐教学日常，让“课上教什么、课后怎么练、学得怎么样”有据可依。',
      'scenarios.item1.label': '场景一 · 日常练声作业',
      'scenarios.item1.title': '老师 3 步布置，学生随时随地练习',
      'scenarios.item1.text':
        '老师在课后选择适配阶段的练声作业，一键布置给全班；学生在家中根据作业要求录制演唱并提交，AI 在几十秒内给出音准反馈与综合评分。',
      'scenarios.item2.label': '场景二 · 考级 / 汇报演出前',
      'scenarios.item2.title': '用客观数据制定针对性冲刺计划',
      'scenarios.item2.text':
        '对目标曲目进行多次录制与评估，把每次练习的音高曲线与得分变化沉淀下来，帮助老师和学生一起找到最需要加强的段落。',
      'scenarios.item3.label': '场景三 · 机构教研与课程优化',
      'scenarios.item3.title': '看见“作业完成率”背后的教学质量',
      'scenarios.item3.text':
        '管理者可以按班级、课程、老师维度查看作业完成情况与平均得分，识别教学瓶颈与课程结构问题，为下一轮课程设计提供依据。',
      'contact.title': '预约一场面向您机构的专属演示',
      'contact.subtitle':
        '告诉我们您的机构规模、学员年龄段与当前的声乐教学方式，我们会基于 Demo 与原型，为您展示 VocalAI 如何融入现有教学体系。',
      'contact.item1': '了解完整的作业与评估闭环体验',
      'contact.item2': '探讨与现有系统对接与部署方式',
      'contact.item3': '评估试点成本与投入产出',
      'contact.form.org.label': '机构名称',
      'contact.form.org.placeholder': '请输入您的机构名称',
      'contact.form.size.label': '机构规模',
      'contact.form.size.option0': '请选择大致规模',
      'contact.form.size.option1': '少于 100 名学员',
      'contact.form.size.option2': '100–300 名学员',
      'contact.form.size.option3': '300–800 名学员',
      'contact.form.size.option4': '800 名以上',
      'contact.form.name.label': '联系人',
      'contact.form.name.placeholder': '您的姓名',
      'contact.form.contact.label': '联系方式',
      'contact.form.contact.placeholder': '邮箱或手机号',
      'contact.form.message.label': '补充说明',
      'contact.form.message.placeholder':
        '简单介绍一下您当前的声乐教学方式、主要痛点或期望解决的问题',
      'contact.form.submit': '提交预约（静态展示，暂不保存信息）',
      'contact.form.tip':
        '当前为 GitHub Pages 静态演示页面，表单信息不会被实际提交。',
      'footer.logo.subtitle': 'AI for Music Education',
      'footer.text':
        'AI4M 旗下产品 VocalAI，专注于将 AI 能力落地到音乐教育的每一个练习场景，以可解释的方式帮助老师与学生一起“看见进步”。',
      'footer.product.title': '产品',
      'footer.product.item1': '作业与评估闭环',
      'footer.product.item2': 'AI 声乐评估引擎',
      'footer.product.item3': '典型应用场景',
      'footer.coop.title': '合作',
      'footer.coop.item1': '音乐院校合作',
      'footer.coop.item2': '机构试点计划',
      'footer.coop.item3': '渠道与品牌合作',
      'footer.bottom.meta': '当前版本：Demo 展示 · 不代表最终产品形态'
    },
    en: {
      'meta.title':
        'AI4M · VocalAI – AI-powered vocal learning for institutions',
      'logo.subtitle': 'VocalAI',
      'nav.product': 'Product',
      'nav.solution': 'Solutions',
      'nav.ai': 'AI',
      'nav.scenarios': 'Use Cases',
      'nav.demo': 'Book a Demo',
      'hero.tagline':
        'AI-powered vocal training infrastructure for music institutions',
      'hero.title.line1': 'Every vocal exercise',
      'hero.title.line2': 'guided by an AI vocal coach',
      'hero.subtitle':
        'VocalAI connects assignment creation, practice submission, AI evaluation and teaching analytics into one platform, helping institutions build a standardized vocal-learning loop.',
      'hero.cta.primary': 'Book a 1:1 product demo',
      'hero.cta.secondary': 'Learn about AI evaluation',
      'hero.meta.target.label': 'For',
      'hero.meta.target.value': 'Vocal training institutions / music schools',
      'hero.meta.capability.label': 'Core capabilities',
      'hero.meta.capability.value': 'Assignment loop · AI evaluation · Library',
      'hero.score.label': 'Overall score',
      'hero.score.level': 'A · Excellent intonation',
      'hero.score.tag1': 'Stable pitch',
      'hero.score.tag2': 'Good high-note control',
      'hero.score.tag3': 'Diction could be clearer',
      'hero.chart.wave': 'Waveform',
      'hero.chart.pitch': 'Pitch curve',
      'hero.footer.model.label': 'Analysis engine',
      'hero.footer.model.value': 'Basic Pitch + rule-based scoring',
      'hero.footer.comment.label': 'Feedback',
      'hero.footer.comment.value': 'Template-based / LLM generated comments',
      'product.title':
        'A unified platform designed around the assignment loop',
      'product.subtitle':
        'From assigning to evaluating, every step is tailored for vocal education, turning daily teaching into reusable assets.',
      'product.card1.title': 'Standardized assignment loop',
      'product.card1.text':
        'Teachers assign vocal exercises and songs in one tap, students record and submit in-app, and AI automatically evaluates and generates reports, forming a full “assign–practice–submit–evaluate–feedback” loop.',
      'product.card1.item1': 'Multi-student / class-wide assignments',
      'product.card1.item2': 'Due dates and smart reminders',
      'product.card1.item3': 'Historical assignments and evaluations retained',
      'product.card2.title': 'AI evaluation for vocal training',
      'product.card2.text':
        'Built on Basic Pitch and rule-based scoring, we quantify intonation stability and high-note control, with waveform and pitch-curve visualizations to support professional judgement.',
      'product.card2.item1': '0–100 overall score + letter grade',
      'product.card2.item2': 'Waveform and pitch-curve visualizations',
      'product.card2.item3': 'AI comments with teacher override',
      'product.card3.title': 'Growing libraries and institution-level data',
      'product.card3.text':
        'Phase-based vocal assignment libraries plus institution-specific content and versions, with dashboards that surface real learning outcomes and student engagement.',
      'product.card3.item1': 'Exercises, repertoire and music theory items',
      'product.card3.item2': 'Organized by level, difficulty and theme',
      'product.card3.item3': 'Assignment completion metrics by institution',
      'solution.title': 'Solutions for teachers, students and institutions',
      'solution.subtitle':
        'One platform, three perspectives – streamlined for daily teaching, practice and academic management.',
      'solution.teacher.badge': 'For teachers',
      'solution.teacher.title': 'Manage each student’s practice efficiently',
      'solution.teacher.text':
        'The teacher home is a student-centric list that highlights missing assignments, completion status and latest scores at a glance.',
      'solution.teacher.item1': 'Per-student assignment overview',
      'solution.teacher.item2': 'One-tap assignment templates',
      'solution.teacher.item3': 'Editable AI evaluation results',
      'solution.student.badge': 'For students',
      'solution.student.title':
        'Turn complex vocal training into clear, actionable tasks',
      'solution.student.text':
        'Students simply follow the in-app flow to practice exercises and songs, submit recordings and receive objective, understandable feedback within seconds.',
      'solution.student.item1': 'Clear lists for pending and completed work',
      'solution.student.item2': 'Built-in recording and video submission',
      'solution.student.item3': 'Full history of assignments and reports',
      'solution.org.badge': 'For institutions',
      'solution.org.title':
        'See teaching quality and operations on a single screen',
      'solution.org.text':
        'Admins manage teacher and student accounts, assignment libraries and key metrics in one place, using real data to drive course design.',
      'solution.org.item1': 'Unified teacher & student account management',
      'solution.org.item2': 'Institution-specific assignment libraries',
      'solution.org.item3': 'Completion and engagement metrics by cohort',
      'ai.title': 'From demo to deployable AI vocal evaluation',
      'ai.subtitle':
        'An AI engine built on open-source models and interpretable rules, balancing musical professionalism with system scalability.',
      'ai.current.title': 'Current demo capabilities',
      'ai.current.item1.label': 'Intonation analysis (P0)',
      'ai.current.item1.desc':
        'Extracts pitch sequences, compares with key and intervals, and quantifies intonation stability.',
      'ai.current.item2.label': 'Overall score (P0)',
      'ai.current.item2.desc':
        'Rule-based 0–100 scoring mapped to letter grades (A–E) for easier communication.',
      'ai.current.item3.label': 'Comment generation (P0)',
      'ai.current.item3.desc':
        'Score-range templates or LLMs (e.g. qwen-turbo) produce natural-language feedback.',
      'ai.current.item4.label': 'Visual reports (P0)',
      'ai.current.item4.desc':
        'Waveform and pitch-curve visualizations help students literally “see” their performance.',
      'ai.roadmap.title': 'Roadmap',
      'ai.roadmap.stage1.tag': 'Demo · 1–2 weeks',
      'ai.roadmap.stage1.text':
        'Fast-track a tangible demo built on Basic Pitch and rule-based scoring to showcase the product direction.',
      'ai.roadmap.stage2.tag': 'MVP · 3–4 months',
      'ai.roadmap.stage2.text':
        'Introduce rhythm, breathing and timbre factors, and connect assignment and analytics modules into a full product loop.',
      'ai.roadmap.stage3.tag': 'Advanced',
      'ai.roadmap.stage3.text':
        'Enable detailed comparisons with reference tracks and past attempts, offering phrase-level feedback for conservatories and large institutions.',
      'scenarios.title': 'Typical deployment scenarios',
      'scenarios.subtitle':
        'Integrate VocalAI into everyday vocal teaching to answer “what to teach, how to practice, and how it went”.',
      'scenarios.item1.label': 'Scenario 1 · Daily practice homework',
      'scenarios.item1.title':
        'Three steps for teachers, anytime practice for students',
      'scenarios.item1.text':
        'Teachers assign level-appropriate exercises after class; students record at home and submit; AI returns intonation feedback and scores within seconds.',
      'scenarios.item2.label': 'Scenario 2 · Exam and recital preparation',
      'scenarios.item2.title':
        'Use objective data to plan targeted last-mile coaching',
      'scenarios.item2.text':
        'Multiple recordings and evaluations of the target piece, with pitch curves and score trends tracked over time to pinpoint weak sections.',
      'scenarios.item3.label':
        'Scenario 3 · Academic research and course optimization',
      'scenarios.item3.title':
        'See teaching quality behind assignment completion rates',
      'scenarios.item3.text':
        'Admins view completion and scoring by class, course and teacher, uncovering bottlenecks and structural issues to refine future curricula.',
      'contact.title': 'Book a tailored demo for your institution',
      'contact.subtitle':
        'Share your institution size, student profile and current vocal teaching methods, and we will show how VocalAI can be embedded into your existing system.',
      'contact.item1': 'Experience the full assignment and evaluation loop',
      'contact.item2': 'Discuss integrations and deployment options',
      'contact.item3': 'Estimate pilot scope, cost and ROI',
      'contact.form.org.label': 'Institution name',
      'contact.form.org.placeholder': 'Enter your institution name',
      'contact.form.size.label': 'Institution size',
      'contact.form.size.option0': 'Select an approximate size',
      'contact.form.size.option1': 'Fewer than 100 students',
      'contact.form.size.option2': '100–300 students',
      'contact.form.size.option3': '300–800 students',
      'contact.form.size.option4': 'More than 800 students',
      'contact.form.name.label': 'Contact person',
      'contact.form.name.placeholder': 'Your name',
      'contact.form.contact.label': 'Contact',
      'contact.form.contact.placeholder': 'Email or phone',
      'contact.form.message.label': 'Additional information',
      'contact.form.message.placeholder':
        'Briefly describe your current vocal teaching setup, main challenges or goals.',
      'contact.form.submit': 'Submit demo request (static, not stored)',
      'contact.form.tip':
        'This is a static GitHub Pages demo. Form data will not be submitted.',
      'footer.logo.subtitle': 'AI for Music Education',
      'footer.text':
        'VocalAI by AI4M brings AI into every practice scenario in music education, helping teachers and students “see progress” in an interpretable way.',
      'footer.product.title': 'Product',
      'footer.product.item1': 'Assignment & evaluation loop',
      'footer.product.item2': 'AI vocal evaluation engine',
      'footer.product.item3': 'Use cases',
      'footer.coop.title': 'Partnerships',
      'footer.coop.item1': 'Conservatory partnerships',
      'footer.coop.item2': 'Institution pilot programs',
      'footer.coop.item3': 'Channel & brand partnerships',
      'footer.bottom.meta':
        'Demo version for presentation only · does not represent the final product'
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.zh;
    html.setAttribute('data-lang', lang);
    html.lang = lang === 'en' ? 'en' : 'zh-CN';

    i18nElements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key || !(key in dict)) return;
      el.textContent = dict[key];
    });

    placeholderElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key || !(key in dict)) return;
      el.setAttribute('placeholder', dict[key]);
    });

    const title = dict['meta.title'];
    if (title) {
      document.title = title;
    }

    langButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang-btn');
      applyLanguage(lang);
    });
  });

  applyLanguage(html.getAttribute('data-lang') || 'zh');

  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});

