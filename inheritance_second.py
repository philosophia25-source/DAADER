"""Second-class calculator copy. Kept separate from the existing first-class labels."""

COPY = {
 'fa': {
  'description':'محاسبه رایگان سهم همسر و وراث طبقه اول و خویشاوندان مستقیم طبقه دوم بر اساس قانون مدنی ایران، با کسر دقیق و مبلغ اختیاری.',
  'scope':'این نسخه همسر، پدر و مادر، فرزندان مستقیم، خواهر و برادرها و پدربزرگ‌ها و مادربزرگ‌های مستقیم را پوشش می‌دهد. وضعیت وراث را هنگام فوت وارد کنید.',
  'secondTitle':'خواهر و برادر و اجداد مستقیم',
  'secondHelp':'این بخش وقتی محاسبه می‌شود که پدر، مادر و فرزند یا نواده‌ای وجود نداشته باشد. فقط افراد زنده و واجد شرایط ارث را وارد کنید.',
  'secondExcluded':'با وجود پدر، مادر یا فرزند، طبقه دوم سهمی ندارد. برای اثر خواهر و برادر بر سهم مادر، بخش حجب مادر را تکمیل کنید.',
  'siblingTitle':'خواهر و برادرها',
  'siblingHelp':'هر فرد را فقط در یک گروه بشمارید. ابوینی یعنی پدر و مادر مشترک، ابی یعنی فقط پدر مشترک و امی یعنی فقط مادر مشترک. اخوه ابی با وجود اخوه ابوینی سهم ندارند.',
  'fullBrothersLabel':'برادران ابوینی، تنی','fullSistersLabel':'خواهران ابوینی، تنی',
  'paternalBrothersLabel':'برادران ابی، فقط پدر مشترک','paternalSistersLabel':'خواهران ابی، فقط پدر مشترک',
  'maternalBrothersLabel':'برادران امی، فقط مادر مشترک','maternalSistersLabel':'خواهران امی، فقط مادر مشترک',
  'grandparentTitle':'پدربزرگ‌ها و مادربزرگ‌ها',
  'grandparentHelp':'نسبت‌ها از دید متوفی است. مثلاً پدرِ پدر یعنی پدربزرگ پدری متوفی. این چهار گزینه شامل اجداد نسل‌های بالاتر نیستند.',
  'paternalGrandfatherLabel':'پدرِ پدر متوفی','paternalGrandmotherLabel':'مادرِ پدر متوفی',
  'maternalGrandfatherLabel':'پدرِ مادر متوفی','maternalGrandmotherLabel':'مادرِ مادر متوفی',
  'siblingDescendantsLabel':'فرزندان یا نوادگان خواهر یا برادرِ فوت‌شده زنده‌اند',
  'remoteAncestorsLabel':'اجداد بالاتر از پدربزرگ و مادربزرگ مستقیم زنده‌اند',
  'otherHeirsLabel':'عمو، عمه، دایی، خاله یا فرزندان آن‌ها زنده‌اند',
  'step3':'مبلغ قابل تقسیم','exampleLabel':'مثال‌هایی برای شروع',
  'example3':'شوهر، برادر تنی و خواهر مادری',
  'contactText':'برای نوه‌ها، قائم‌مقامی فرزندان خواهر و برادر، اجداد دورتر، طبقه سوم یا اختلاف در وراث، موضوع را کوتاه توضیح دهید.',
  'faq4':'سهم خواهر و برادرها یکسان است؟',
  'answer4':'خیر. اخوه ابوینی، اخوه ابی را از ارث محروم می‌کنند، اما اخوه امی محروم نمی‌شوند. در گروه پدری، سهم مرد دو برابر زن و در گروه مادری تقسیم برابر است. سهم همسر و وجود اجداد نیز در نتیجه اثر دارد.',
  'sourceText':'مواد ۸۴۳، ۸۶۲ تا ۸۷۰، ۸۷۵ تا ۸۹۲، ۹۰۵ تا ۹۲۷ و ۹۴۰ تا ۹۴۹ قانون مدنی.',
  'errors':{
   'otherHeirs':'بدون وراث طبقه اول یا دوم، سهم طبقه سوم در این نسخه محاسبه نمی‌شود.',
   'siblingDescendants':'بدون خواهر یا برادر زنده، سهم فرزندان آن‌ها به شاخه نسب و قائم‌مقامی وابسته است. این نسخه برای آن سهم نهایی صادر نمی‌کند.',
   'remoteAncestors':'اجداد نسل‌های بالاتر به بررسی درجه قرابت و حجب نیاز دارند. این نسخه فقط چهار پدربزرگ و مادربزرگ مستقیم را محاسبه می‌کند.'
  },
  'names':{
   'fullBrothers':'برادر ابوینی','fullSisters':'خواهر ابوینی',
   'paternalBrothers':'برادر ابی','paternalSisters':'خواهر ابی',
   'maternalBrothers':'برادر امی','maternalSisters':'خواهر امی',
   'paternalGrandfather':'پدربزرگ پدری','paternalGrandmother':'مادربزرگ پدری',
   'maternalGrandfather':'پدربزرگ مادری','maternalGrandmother':'مادربزرگ مادری'
  },
  'notes':{
   'secondClass':'محاسبه طبقه دوم بر اساس مواد ۹۱۶ تا ۹۲۷ انجام شده است. فرض بر نبود وراث طبقه اول است.',
   'excludedPaternal':'مطابق مواد ۹۱۸ و ۹۲۶، اخوه ابی با وجود اخوه ابوینی سهمی ندارند. سهم صفر آن‌ها در جدول نشان داده شده است.',
   'maternalSixth':'در اجتماع دو طرف، تنها خویش مادری یک خواهر یا برادر امی است. سهم او یک‌ششم اصل ترکه قابل تقسیم است.',
   'maternalThird':'در اجتماع دو طرف، یک‌سوم اصل ترکه قابل تقسیم به گروه مادری می‌رسد و بین افراد این گروه برابر تقسیم می‌شود.',
   'secondSpouse':'مطابق ماده ۹۲۷، همسر و خویشان مادری سهم خود را از اصل ترکه می‌برند. کسری ناشی از سهم همسر به گروه پدری وارد شده است.',
   'maternalOnly':'با انحصار وراث نسبی به طرف مادری، باقی‌مانده پس از سهم همسر بین آن‌ها برابر تقسیم شده است.',
   'paternalOnly':'با انحصار وراث نسبی به طرف پدری، باقی‌مانده پس از سهم همسر با وزن مرد دو برابر زن تقسیم شده است.',
   'excludedSiblingDescendants':'با وجود خواهر یا برادر زنده، فرزندان خواهر و برادر در این محاسبه سهمی ندارند، با رعایت مواد ۸۹۰ و ۹۲۵.',
   'excludedThird':'با وجود وراث طبقه دوم، وراث طبقه سوم سهمی ندارند.'
  }
 },
 'en': {
  'description':'Calculate shares for spouses, direct first-class heirs, siblings and immediate grandparents under Iranian law, with exact fractions and optional amounts.',
  'scope':'This version covers spouses, parents, direct children, siblings and immediate grandparents. Enter each heir’s circumstances at the time of death.',
  'secondTitle':'Siblings and immediate grandparents',
  'secondHelp':'This class is considered only when no parent, child or further descendant survives. Enter only living relatives legally eligible to inherit.',
  'secondExcluded':'A surviving parent or direct child excludes the second class. To assess a restriction on the mother’s share, use the separate sibling section above.',
  'siblingTitle':'Siblings',
  'siblingHelp':'Count each person once. Full siblings share both parents, paternal half-siblings share only the father, and maternal half-siblings share only the mother. Full siblings exclude paternal half-siblings.',
  'fullBrothersLabel':'Full brothers','fullSistersLabel':'Full sisters',
  'paternalBrothersLabel':'Paternal half-brothers','paternalSistersLabel':'Paternal half-sisters',
  'maternalBrothersLabel':'Maternal half-brothers','maternalSistersLabel':'Maternal half-sisters',
  'grandparentTitle':'Immediate grandparents',
  'grandparentHelp':'Relationships are to the deceased. These four choices do not include ancestors of earlier generations.',
  'paternalGrandfatherLabel':'Father’s father','paternalGrandmotherLabel':'Father’s mother',
  'maternalGrandfatherLabel':'Mother’s father','maternalGrandmotherLabel':'Mother’s mother',
  'siblingDescendantsLabel':'Children or later descendants of a deceased sibling survive',
  'remoteAncestorsLabel':'Ancestors beyond the four immediate grandparents survive',
  'otherHeirsLabel':'Uncles, aunts or their descendants survive',
  'step3':'The estate amount','exampleLabel':'Examples to start',
  'example3':'Husband, full brother and maternal half-sister',
  'contactText':'For further descendants, descendants of siblings, earlier-generation ancestors, third-class heirs or disputed eligibility, briefly describe the situation for review.',
  'faq4':'Do all siblings receive equal shares?',
  'answer4':'No. Full siblings exclude paternal half-siblings, but do not exclude maternal half-siblings. Within the paternal group, male shares are twice female shares. The maternal group divides equally. A spouse and grandparents can also affect the result.',
  'sourceText':'Iranian Civil Code, Articles 843, 862–870, 875–892, 905–927 and 940–949.',
  'errors':{
   'otherHeirs':'Without first- or second-class heirs, this version does not calculate third-class shares.',
   'siblingDescendants':'Without a surviving sibling, inheritance by sibling descendants depends on family branches and representation. This version does not issue a final allocation for that case.',
   'remoteAncestors':'Earlier-generation ancestors require a separate assessment of proximity and exclusion. This version calculates only the four immediate grandparents.'
  },
  'names':{
   'fullBrothers':'Full brother','fullSisters':'Full sister',
   'paternalBrothers':'Paternal half-brother','paternalSisters':'Paternal half-sister',
   'maternalBrothers':'Maternal half-brother','maternalSisters':'Maternal half-sister',
   'paternalGrandfather':'Paternal grandfather','paternalGrandmother':'Paternal grandmother',
   'maternalGrandfather':'Maternal grandfather','maternalGrandmother':'Maternal grandmother'
  },
  'notes':{
   'secondClass':'Second-class shares follow Articles 916–927. The calculation assumes no first-class heir survives.',
   'excludedPaternal':'Under Articles 918 and 926, full siblings exclude paternal half-siblings. Their zero shares are shown in the table.',
   'maternalSixth':'Both sides are represented and the only maternal relative is one half-sibling. That sibling receives one-sixth of the original distributable estate.',
   'maternalThird':'Both sides are represented. The maternal group receives one-third of the original distributable estate, divided equally.',
   'secondSpouse':'Under Article 927, the spouse and maternal relatives take their shares from the original estate. The spouse-related shortfall is borne by the paternal group.',
   'maternalOnly':'With blood heirs only on the maternal side, the estate remaining after the spouse’s share is divided equally among them.',
   'paternalOnly':'With blood heirs only on the paternal side, the estate remaining after the spouse’s share is divided with male shares twice female shares.',
   'excludedSiblingDescendants':'Surviving siblings exclude sibling descendants in this calculation under Articles 890 and 925.',
   'excludedThird':'Second-class heirs exclude third-class heirs.'
  }
 },
 'ar': {
  'description':'حساب حصص الزوجين وورثة الطبقة الأولى المباشرين والإخوة والأجداد المباشرين وفق القانون الإيراني، بكسور دقيقة ومبالغ اختيارية.',
  'scope':'تشمل هذه النسخة الزوجين والوالدين والأبناء المباشرين والإخوة والأخوات والأجداد المباشرين. أدخل حالة الورثة عند وفاة المورّث.',
  'secondTitle':'الإخوة والأخوات والأجداد المباشرون',
  'secondHelp':'تُحسب هذه الطبقة عند عدم وجود أب أو أم أو ابن أو بنت أو نسل أدنى. أدخل الأحياء المستحقين للميراث فقط.',
  'secondExcluded':'وجود أحد الوالدين أو الأبناء المباشرين يحجب الطبقة الثانية. لدراسة حجب الأم، استخدم القسم المستقل للإخوة أعلاه.',
  'siblingTitle':'الإخوة والأخوات',
  'siblingHelp':'احسب كل شخص مرة واحدة. الشقيق يشترك في الأب والأم، ولأب يشترك في الأب فقط، ولأم يشترك في الأم فقط. الإخوة الأشقاء يحجبون الإخوة لأب.',
  'fullBrothersLabel':'الإخوة الأشقاء','fullSistersLabel':'الأخوات الشقيقات',
  'paternalBrothersLabel':'الإخوة لأب','paternalSistersLabel':'الأخوات لأب',
  'maternalBrothersLabel':'الإخوة لأم','maternalSistersLabel':'الأخوات لأم',
  'grandparentTitle':'الأجداد المباشرون',
  'grandparentHelp':'القرابة من جهة المتوفى. لا تشمل الخيارات الأربعة أجداد الأجيال الأعلى.',
  'paternalGrandfatherLabel':'أبو الأب','paternalGrandmotherLabel':'أم الأب',
  'maternalGrandfatherLabel':'أبو الأم','maternalGrandmotherLabel':'أم الأم',
  'siblingDescendantsLabel':'يوجد أبناء أو أحفاد لأخ أو أخت متوفى',
  'remoteAncestorsLabel':'يوجد أجداد من أجيال أعلى من الأجداد الأربعة المباشرين',
  'otherHeirsLabel':'يوجد أعمام أو عمات أو أخوال أو خالات أو نسلهم',
  'step3':'قيمة التركة','exampleLabel':'أمثلة للبدء',
  'example3':'زوج وأخ شقيق وأخت لأم',
  'contactText':'للأحفاد أو نسل الإخوة أو الأجداد من أجيال أعلى أو الطبقة الثالثة أو النزاع بشأن الاستحقاق، اشرح الحالة بإيجاز للمراجعة.',
  'faq4':'هل حصص الإخوة والأخوات متساوية؟',
  'answer4':'لا. الأشقاء يحجبون الإخوة لأب، ولا يحجبون الإخوة لأم. في المجموعة الأبوية للذكر مثل حظ الأنثيين، وفي المجموعة الأمومية تُقسم الحصة بالتساوي. يؤثر وجود الزوج أو الزوجة والأجداد أيضاً في النتيجة.',
  'sourceText':'القانون المدني الإيراني، المواد ٨٤٣ و٨٦٢ إلى ٨٧٠ و٨٧٥ إلى ٨٩٢ و٩٠٥ إلى ٩٢٧ و٩٤٠ إلى ٩٤٩.',
  'errors':{
   'otherHeirs':'عند غياب ورثة الطبقتين الأولى والثانية، لا تحسب هذه النسخة حصص الطبقة الثالثة.',
   'siblingDescendants':'عند غياب أخ أو أخت حي، تعتمد حصص نسل الإخوة على فروع النسب والقيام مقام الأصل. لا تصدر هذه النسخة توزيعاً نهائياً لهذه الحالة.',
   'remoteAncestors':'يتطلب الأجداد من أجيال أعلى دراسة درجة القرابة والحجب. تحسب هذه النسخة الأجداد الأربعة المباشرين فقط.'
  },
  'names':{
   'fullBrothers':'أخ شقيق','fullSisters':'أخت شقيقة',
   'paternalBrothers':'أخ لأب','paternalSisters':'أخت لأب',
   'maternalBrothers':'أخ لأم','maternalSisters':'أخت لأم',
   'paternalGrandfather':'جد لأب','paternalGrandmother':'جدة لأب',
   'maternalGrandfather':'جد لأم','maternalGrandmother':'جدة لأم'
  },
  'notes':{
   'secondClass':'حُسبت حصص الطبقة الثانية وفق المواد ٩١٦ إلى ٩٢٧، على فرض عدم وجود وارث من الطبقة الأولى.',
   'excludedPaternal':'وفق المادتين ٩١٨ و٩٢٦، الأشقاء يحجبون الإخوة لأب. تظهر حصصهم الصفرية في الجدول.',
   'maternalSixth':'مع اجتماع الجهتين، القريب الوحيد من جهة الأم هو أخ أو أخت لأم، وحصته سدس أصل التركة القابلة للقسمة.',
   'maternalThird':'مع اجتماع الجهتين، تأخذ المجموعة الأمومية ثلث أصل التركة القابلة للقسمة، وتقتسمه بالتساوي.',
   'secondSpouse':'وفق المادة ٩٢٧، يأخذ الزوج أو الزوجة والأقارب من جهة الأم حصصهم من أصل التركة. يتحمل الجانب الأبوي النقص الناشئ عن حصة الزوج أو الزوجة.',
   'maternalOnly':'عند انحصار ورثة النسب في جهة الأم، يُقسم الباقي بعد حصة الزوج أو الزوجة بينهم بالتساوي.',
   'paternalOnly':'عند انحصار ورثة النسب في جهة الأب، يُقسم الباقي بعد حصة الزوج أو الزوجة بينهم للذكر مثل حظ الأنثيين.',
   'excludedSiblingDescendants':'مع وجود أخ أو أخت حي، يُحجب نسل الإخوة في هذا الحساب وفق المادتين ٨٩٠ و٩٢٥.',
   'excludedThird':'وجود ورثة الطبقة الثانية يحجب الطبقة الثالثة.'
  }
 }
}

def extend_labels(labels):
 for lang, additions in COPY.items():
  for key,value in additions.items():
   if isinstance(value,dict):labels[lang][key].update(value)
   else:labels[lang][key]=value
