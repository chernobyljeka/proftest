
function WriteQuests(a)
{
document.getElementById('raq').innerHTML ="<div class='question_head'>"+a[0]+"</div><br><table id='tab_quest'><tbody>";
	for (var i=1;i<a.length;i++)
	{
		document.getElementById('tab_quest').innerHTML +="<tr><td><input class='radio' type='radio' onclick='func(this.value,k,b);' name='Ans' id="+i+" value="+arr[k][i-1]+"></td><td><label for='"+i+"'>"+a[i]+"</label></td></tr>";
	}
	document.getElementById('raq').innerHTML += "</tbody></table>";
}
function func(h,k,b)
{
	b[k]=h;
	f=true;
}
function Next(k)
{
	if (f==false)
	{
		alert('Нельзя перейти на следующий вариант не сделав выбор');
	}
	else
	{
	f=false;
	document.getElementById('raq2').innerHTML = "<input class='small_button' type='button' value='Назад' onclick='k--;Back(k);'><input class='small_button' type='button' value='Далее' onclick='k++;Next(k);'>";
	R(k);
	}
}
function Back(k)
{
	if (k>0) 
	{
		document.getElementById('raq2').innerHTML = "<input class='small_button' type='button' value='Назад' onclick='k--;Back(k);'><input class='small_button' type='button' value='Далее' onclick='k++;Next(k);'>";
	}
	else
	{
		if (k<0) 
		{
			k=0;
		}
		else
		{
			document.getElementById('raq2').innerHTML = "<input class='small_button' type='button' value='Далее' onclick='k++;Next(k);'>";
		}
	}
	R(k);
}
function R(k) {
				switch (k)
				{
					case 0: WriteQuests(a.slice(0,11)); break
					case 1: WriteQuests(a.slice(11,21)); break
					case 2: WriteQuests(a.slice(21,33)); break
					case 3: WriteQuests(a.slice(33,41)); break
					case 4: WriteQuests(a.slice(41,56)); break
					case 5: WriteQuests(a.slice(56,64)); break
					case 6: WriteQuests(a.slice(64,81)); break
					case 7: WriteQuests(a.slice(81,95)); break
					case 8: WriteQuests(a.slice(95,107)); break
					case 9: WriteQuests(a.slice(107,116)); break
					case 10: WriteQuests(a.slice(116,126)); break
					case 11: WriteQuests(a.slice(126,136)); break
					case 12: res(b);break
				}
			}
function res(b)
{
	var s ="";
	var jk=[0,0,0,0,0,0,0,0,0,0,0,0,0];
	for (var i=0;i<b.length;i++) 
	{
		s+=b[i];
	}
	for (var i=0;i<s.length;i++)
	{
		switch (s[i])
				{
					case '0': jk[0]++;break
					case '1': jk[1]++; break
					case '2': jk[2]++;break
					case '3': jk[3]++;break
					case '4': jk[4]++; break
					case '5': jk[5]++;break
					case '6': jk[6]++;break
					case '7': jk[7]++;break
					case '8': jk[8]++;break
					case '9': jk[9]++; break
					case 'A': jk[10]++;break
					case 'B': jk[11]++;break
					case 'C': jk[12]++;break
				}
	}
	var max=0,sum =0;m=0;
	for (var i=0;i<12;i++)
	{
		sum+=jk[i];
		if (jk[i]>max)
		{
			max = jk[i];
			m=i;
		}
	}
	if (jk[m]/sum*100>49 && m!=0)
	{
		document.getElementById('raq').innerHTML='<div class="final"><h1>Уважаемый абитуриент!</h1> <br> <br>Результаты прохождения Вами процедуры тестирования позволяют рекомендовать Вам выбор поступления по специальностям';
			switch (m)
				{
					case 1: fbd1();break
					case 2: fbd2();break
					case 3: fbd3();break
					case 4: fbd4();break
					case 5: ef1();break
					case 6: ef2();break
					case 7: ef3();break
					case 8: zoj1();break
					case 9: zoj2();break
					case 10:bio1();break
					case 11:bio2();break
					case 12:bio3();break
				}
	}
	else
	{
		if (jk[m]/sum*100>30 && m!=0)
		{
			document.getElementById('raq').innerHTML='<div class="final"><h1>Уважаемый абитуриент!</h1> <br> <br>Результаты прохождения Вами процедуры тестирования позволяют рекомендовать Вам выбор поступления по специальностям';
			switch (m)
				{
					case 1: fbd1();break
					case 2: fbd2();break
					case 3: fbd3();break
					case 4: fbd4();break
					case 5: ef1();break
					case 6: ef2();break
					case 7: ef3();break
					case 8: zoj1();break
					case 9: zoj2();break
					case 10:bio1();break
					case 11:bio2();break
					case 12:bio3();break
				}
				var m1 = m;
				max=0;m=0;
			for (var i=0;i<12;i++)
			{
				if (jk[i]>max && i!=m1)
				{
					max = jk[i];
					m=i;
				}
			}
			switch (m)
				{
					case 1: fbd1();break
					case 2: fbd2();break
					case 3: fbd3();break
					case 4: fbd4();break
					case 5: ef1();break
					case 6: ef2();break
					case 7: ef3();break
					case 8: zoj1();break
					case 9: zoj2();break
					case 10:bio1();break
					case 11:bio2();break
					case 12:bio3();break
				}
		}
		else
		{
			document.getElementById('raq').innerHTML ='';
			ekr0();
		}
	}
	document.getElementById('raq2').innerHTML ='';
	if (m!=0)
	{
		document.getElementById('raq').innerHTML+='<br> <br>  Среди учреждений высшего образования в Республике Беларусь возможность обучения по данным специальностям предлагает и Полесский государственный университет. С информацией о порядке и условиях поступления и обучения Вы можете ознакомиться на <a href="http://www.polessu.by/" class="hw" target="_blank">сайте университета</a> или в <a href="http://www.polessu.by/?q=%D0%B0%D0%B1%D0%B8%D1%82%D1%83%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D1%83-1" class="hw" target="_blank">Приемной комиссии</a>. <br> <br> Желаем Вам успешной сдачи экзаменов, успешного прохождения процедуры централизованного тестирования и конкурса при поступлении!</p></div>'
	}
	document.getElementById('raq2').innerHTML = "<a href='http://www.polessu.by/'><input class='small_button' type='button' value='ОК'></a>";
}

function ekr0()
{
	document.getElementById('raq').innerHTML += '<div class="final"><h1>Уважаемый абитуриент!</h1> <br> <br>Степень неопределенности и неуверенности Ваших ответов достаточно велика. Вероятнее всего Вы так и не определились с ответом на вопрос о том, в какой сфере высшего образования Вы бы хотели осуществлять обучение. Вполне возможно, что получение высшего профессионального образования – не Ваш выбор и стоит попробовать себя в других областях. В любом случае желаем Вам успехов в достойной профессиональной деятельности на благо общества!</p></div>';
}



function bio3()
{
	document.getElementById('raq').innerHTML += '<span class="red">«Рыбоводство»</span>.';
}

function bio2()
{
	document.getElementById('raq').innerHTML += '<span class="red">«Садово-парковое строительство»</span>.';
}

function bio1()
{
	document.getElementById('raq').innerHTML += ' <span class="red">«Биология (биотехнология)»</span>, <span class="red">«Биология (научно-производственная деятельность)»</span>. ';
}

function zoj2()
{
	document.getElementById('raq').innerHTML +=  '<span class="red">«Оздоровительная и адаптивная физическая культура»</span>, <span class="red">«Физическая реабилитация и эрготерапия»</span>.';
}

function zoj1()
{
	document.getElementById('raq').innerHTML += '<span class="red">«Физическая культура»</span>, <span class="red">«Спортивно-педагогическая деятельность»</span>.';
}

function ef3()
{
	document.getElementById('raq').innerHTML += '<span class="red"> «Делопроизводство» </span>.';
}

function ef2()
{
 document.getElementById('raq').innerHTML += '<span class="red"> «Туризм и гостеприимство» </span>.'
}

function ef1()
{
 document.getElementById('raq').innerHTML += '<span class="red"> «Экономика и управление на предприятии промышленности» </span>, <span class="red">«Экономика и управление на предприятии АПК»</span>, <span class="red"> «Экономика и управление на малых и средних предприятиях» </span>, <span class="red"> «Маркетинг» </span>.';
}

function fbd4()
{
	document.getElementById('raq').innerHTML += '<span class="red"> «Лингвистическое обеспечение межкультурных коммуникаций (внешнеэкономические связи)» </span>.';
}

function fbd3()
{
	document.getElementById('raq').innerHTML += '<span class="red"> «Информационные технологии» </span>.';
}

function fbd2()
{
	document.getElementById('raq').innerHTML += '<span class="red"> «Страхование» </span>.';
}
function fbd1()
{
	document.getElementById('raq').innerHTML += '<span class="red"> «Банковское дело» </span>, <span class="red"> «Финансы» </span>, <span class="red"> «Бухгалтерский учет, анализ и аудит» </span>.';
}