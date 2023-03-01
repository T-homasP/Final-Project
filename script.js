$('#submitButton span').hover(function () {
        $(this).css('cursor', 'pointer');
        
    });
function addComment() {
    let displayName = $('#displayName').val();
    let comment = $('#comment').val();
    let newCommentSection = $(`<div class="addComment">
    <div class ="fix">   
        <div class="leftImg">
            <img src="images.png" alt="profile_pic">
            
        </div>
        
        <div class ="right">
            <div class ="userNameDiv">
                <p id="userName">sdffsd</p>
                <p class ="commenT">sdfsdf</p>
            </div>
            <div class="editDel">
                <button id="edit">
                    <span>Edit</span>
                </button>
                <button id="delete">
                    <span>Delete</span>
                </button>
                
            </div>
            
        </div>  
    </div> 
    <div class="editComment eddit">
        <input type="text" name="edit" id="edittedComment" placeholder="Edit comment" maaxlength="500">
        <button id="submitButtonn">
            <span>Submit</span>
        </button>
    </div> `);
    $(newCommentSection).find('#userName').text(displayName);
    $(newCommentSection).find('.commenT').text(comment);
    $('.commentSection').prepend(newCommentSection);
    $('#displayName').val('');
    $('#comment').val('');
    $(newCommentSection).find('#delete').click(function() {
        $(newCommentSection).remove();
    });
   
    $(newCommentSection).find('#delete span, #edit span, #submitButtonn').hover(
      function() {
        $(this).css('cursor', 'pointer');
      },
      function() {
        $(this).css('cursor', 'auto');
      }
    );
   
   
    $(newCommentSection).find('#submitButtonn').click(function (e) {
     let fixedComment = $(newCommentSection).find('#edittedComment').val();     
        $(newCommentSection).find('.commenT').text(fixedComment);
        $(newCommentSection).find('#edittedComment').val('')
    });
    
     $(newCommentSection).find('#edit span, #submitButtonn span' ).on('click', function(){
        
        $(newCommentSection).find('.editComment').toggleClass('eddit');
    });
    
}
    
$('#submitButton').click(addComment);

