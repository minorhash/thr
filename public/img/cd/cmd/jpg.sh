for i in *.png
do
echo $i
se=$(echo $i|sed s/.png//g)
echo jpg/"$se".jpg
convert $i jpg/"$se".jpg

done
pwd
