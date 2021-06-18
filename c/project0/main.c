
#include <stdio.h>

int main()
{
  const int num = 1234567;
  const int divisor = 1000;

  int dividend = num;
  while (dividend != 0)
  {
    int remainder = dividend % divisor;
    dividend = dividend / divisor; //quotient
    printf("%d\n", remainder);
  }

  // printf("char is %lu\n", sizeof(char));
  // printf("int is %lu\n", sizeof(int));
  // printf("float is %lu\n", sizeof(float));
  // printf("double is %lu\n", sizeof(double));
}