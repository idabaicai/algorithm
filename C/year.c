/**
 *  程序在ubuntu16.04测试通过 gcc版本(5.4) 
 *  姓名:刘辉 学号:201675060109  
 *  author:icandebug@gmail.com
 *  2018-5-12
 *  问题描述:
 *  年龄的立方是个4位数
 *  年龄的4次方是个6位数
 *  这10位数正好包含0-9这10个数字
 */
#include<stdio.h>
//算阶乘
int fn(int n)
{
	if(n==2) return 2;
	return n * fn(n-1);
}
//判断一个4位数和一个6是否包含0-9 这10个数字
//有一个0，其余相乘等于9的阶乘
int is_contain_ten_num(int num4,int num6)
{
	int has_zero; 	//是否包含0
	int count = 1;	//9个数字相乘
	int t;			//临时变量
	while(num4){
		//取数的最后一位
		if(num4%10==0){
			has_zero = 1;
			num4 /= 10;	//取掉数的最后一位
		}else {
			t = num4 % 10;
			count *= t;
			num4 /= 10;	
		}
	}
	//printf("count=:%d\n",count);
	//printf("has_video=:%d\n",has_zero);
	while(num6){
		//取数的最后一位
		if(num6%10==0){
			has_zero = 1;
			num6 /= 10;	//取掉数的最后一位
		}else {
			t = num6 % 10;
			count *= t;
			num6 /= 10;
		}
	}
	if(count == fn(9) && has_zero == 1){
		return 1;	
	} else {
		return 0;
	}
}
//判断一个数是几位数
int unit_num(int n)
{
	int i = 0;
	while(n){
		i++;
		n /= 10;
	}
	return i;
}
int main()
{
	int year = 10;	 //维纳的年龄 区间:[10,50]
	int is_find = 0; //如果没找到可能是区间太小
	int t1 = 1;
	int t2 = 1;
	for(year = 10; year<=50; year++){
		t1 = year * year * year;	//i的立方
		t2 = t1 * year;	//i的4次方
		if(unit_num(t1) == 4 && unit_num(t2) == 6 && is_contain_ten_num(t1,t2)){
			printf("维纳的年龄是：%d\n",year);
			is_find = 1;
			break;
		}
		else {
			t1 = 1;
			t2 = 1;	
		}
	}
	if(is_find == 0)
		printf("I don't know\n");
}
