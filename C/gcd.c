//求最大公约数
#include<stdio.h>
//辗转相除法
int sucDivison(int a,int b)
{
    int m,t;
    if(a<b) {t = a; a = b; b = t;}
    if(a%b!=0) {
        m = a;
        a = b;
        b = m % b;
    }else {
        return b;
    }
    return b;
}
//ardshg
//更相减损术
int gcd(int a,int b)
{
    int flag = 1;
    while(a%2==0 && b%2==0) {
        a /= 2; b /= 2;
        flag *= 2;
    }
    //新建冲突
    while(a != b) {
        if(a > b) a -= b; else b -= a;
    }
    return a*flag;
}
//新建冲突
int main(void)
{
    printf("9,27的最大公约数%d\n",sucDivison(9,27));  //9
    printf("8,12的最大公约数%d\n",sucDivison(8,12));  //4
    printf("12,8的最大公约数%d\n",sucDivison(12,8));  //4
    printf("2,15的最大公约数%d\n",sucDivison(2,15));  //1
    printf("2,15的最大公约数%d\n",gcd(2,15));         //1
    printf("8,12的最大公约数%d\n",gcd(8,12));         //4
    return 0;
}
