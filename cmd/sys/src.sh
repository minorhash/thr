if [ -z $1 ];then
    echo "usage"
else
    se=$(echo $1|sed s/src/js/g)
    echo "$se"
npx webpack $1 -o "$se"

fi
