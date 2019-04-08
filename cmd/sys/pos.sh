if [ -z $1 ];then
    echo "usage"
else
    se=$(echo $1|sed s/pos/js/g|sed s/jsx//g)
    echo "$se"js
npx webpack $1 -o "$se"js

fi
