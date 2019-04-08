lftp -uadmin,bulk2010 tmsmusic.tokyo -e "
cd /home/admin/exp/biz/cafe/wow/public
pwd
lcd /mnt/sdb3/exp/biz/cafe/wow/public
lpwd
mirror -R css
exit
"
